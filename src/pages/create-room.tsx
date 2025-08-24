import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import type { Room } from "@/types/room";

type GetRoomsAPIResponse = Room[];

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();

      return result;
    },
  });

  return (
    <div>
      {isLoading && <div>Carregando...</div>}
      <div>
        <div className="flex flex-col">
          {data?.map((room) => {
            return (
              <Link key={room.id} to={`/room/${room.id}`}>
                {room.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
