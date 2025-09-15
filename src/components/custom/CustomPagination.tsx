import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";

interface CustomPaginationProps {
  totalPages: number;
}

export const CustomPagination = (
  {totalPages}: CustomPaginationProps
) => {

  const page = 8 as number

  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          disabled={page === 1}
          size="sm">
          <ChevronLeft className="h-4 w-4"/>
          Anterior
        </Button>

        {
          Array.from({length: totalPages}).map((_, index) => (
            <Button
              key={index}
              variant={
                index + 1 === page ? 'default' : 'outline'
              } size="sm">
              {index + 1}
            </Button>
          ))
        }

        <Button
          variant="outline"
          disabled={page === totalPages}
          size="sm">
          Siguiente
          <ChevronRight className="h-4 w-4"/>
        </Button>
      </div>
    </>
  )
}
