
import dog from '../../app/assets/dog.jpeg'
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
 
 
type CardProps = React.ComponentProps<typeof Card>
 
export function ProjectCard({ className, ...props }: CardProps) {
  return (
    <Card className="flex flex-col min-w-500" {...props}>
      <CardContent>
        <Image
            src={dog}
            alt="project image"
            className="w-full"
          />
        {/* Image for the project */}
      </CardContent>
      <CardFooter>
        <div className="flex flex-col">
          <CardTitle>Blue Bottle Coffee</CardTitle>
          <CardDescription>This is a bunch of text talking about the work I did on this project</CardDescription>
        </div>
      </CardFooter>
    </Card>
  )
}