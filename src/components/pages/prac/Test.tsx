import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import "./test.css"

const Test = () => {
    const [check, setCheck] = useState(false);

    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col gap-5">
            <Button onClick={() => setCheck(!check)}>Change Avatar</Button>
            <Avatar>
                <AvatarImage src={check ? '' : "https://github.com/shadcn.png"} />
                <AvatarFallback>RD</AvatarFallback>
            </Avatar>
            <Button variant="outline">outline</Button>
            <Button variant="link" className='link-button'>link</Button>
        </ div>
    )
}

export default Test;