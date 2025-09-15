import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {SlashIcon} from "lucide-react";
import {Link} from "react-router";

interface Breadcrumb {
  label: string;
  to: string;
}

interface CustomBreadcrumbProps {
  currentPage: string;
  breadcrumbs?: Breadcrumb[];
}

const CustomBreadcrumb = (
  {currentPage, breadcrumbs}: CustomBreadcrumbProps
) => {
  return (
    <Breadcrumb className={'my-5'}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Inicio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {
          breadcrumbs?.map((breadcrumb) => (
            <div className={'flex flex-row items-center'} key={breadcrumb.label + breadcrumb.to}>
              <BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbLink asChild>
                  <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))
        }
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            className={'text-black'}
            >
            {currentPage}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default CustomBreadcrumb
