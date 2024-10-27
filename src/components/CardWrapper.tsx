import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardWrapperProps {
    title: string;
    backText: string;
    backLink: () => void;
    children: React.ReactNode;
}

const CardWrapper = ({title, backText, backLink, children}: CardWrapperProps) => {
  return (
    <Card className="flex items-center justify-center flex-col select-none">
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <p>{backText} <a className="cursor-pointer text-blue-400 underline" onClick={backLink}>{title === 'Login' ? 'signup' : 'login'}</a></p>
      </CardFooter>
    </Card>
  )
}

export default CardWrapper