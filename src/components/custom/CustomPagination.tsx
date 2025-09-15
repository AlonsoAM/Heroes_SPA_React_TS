import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useSearchParams} from "react-router";

interface CustomPaginationProps {
  totalPages: number;
}

export const CustomPagination = (
  {totalPages}: CustomPaginationProps
) => {

  const [searchParams, setSearchParams] = useSearchParams()

  const queryPage = searchParams.get('page') ?? '1'

  const page = isNaN(Number(queryPage)) ? 1 : Number(queryPage)

  const handlePageChange = (newPage: number) => {
    if(page < 1 || page > totalPages) return
    searchParams.set('page', newPage.toString())
    setSearchParams(searchParams)
  }

  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
          size="sm">
          <ChevronLeft className="h-4 w-4"/>
          Anterior
        </Button>

        {
          Array.from({length: totalPages}).map((_, index) => (
            <Button
              key={index}
              onClick={() => handlePageChange(index + 1)}
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
          onClick={() => handlePageChange(page + 1)}
          size="sm">
          Siguiente
          <ChevronRight className="h-4 w-4"/>
        </Button>
      </div>
    </>
  )
}
