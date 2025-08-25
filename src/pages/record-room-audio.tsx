import { useRef, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === "function" &&
  typeof window.MediaRecorder === "function"

type RoomParams = {
  roomId: string
}

export function RecordRoomAudio() {
  const params = useParams<RoomParams>()
  const [isRecording, setIsRecording] = useState(false)
  const recorder = useRef<MediaRecorder | null>(null)
  const intervalRef = useRef<NodeJS.Timeout>(null)

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  const createRecorder = (audio: MediaStream) => {
    recorder.current = new MediaRecorder(audio, {
      mimeType: "audio/webm",
      audioBitsPerSecond: 64_000,
    })

    recorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        uploadAudio(event.data)
      }
    }

    recorder.current.start()
  }

  const startRecording = async () => {
    if (!isRecordingSupported) {
      alert("O seu navegador não suporta gravação de áudio")
      return
    }

    setIsRecording(true)

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    })

    createRecorder(audio)

    intervalRef.current = setInterval(() => {
      recorder.current?.stop()

      createRecorder(audio)
      // biome-ignore lint/style/noMagicNumbers: it has meaning in interval context
    }, 5000)
  }

  const stopRecording = () => {
    setIsRecording(false)

    if (recorder.current && recorder.current.state !== "inactive") {
      recorder.current.stop()
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const uploadAudio = async (audio: Blob) => {
    const formData = new FormData()

    formData.append("file", audio, "audio.webm")

    await fetch(`http://localhost:3333/rooms/${params.roomId}/audio`, {
      method: "POST",
      body: formData,
    })
  }

  return (
    <div className="flex h-svh flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Parar gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar áudio</Button>
      )}
      {isRecording ? <p>Gravando...</p> : <p>Paudado</p>}
    </div>
  )
}
