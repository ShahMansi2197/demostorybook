import React from "react";
import Button from "./Button";

export default {
    title : 'Form/Button',
    component : Button,
    // args : {
    //     children : 'Button'
    // }
    // decorators : [(story: any) => <Center>{story()}</Center>]
}

export const Primary = () =><Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="sucess">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>


// const Template = (args : any) => <Button {...args}/>

// export const PrimaryA = Template.bind({});
// PrimaryA.args  =   {
//     variant : "primary",
//   //  children : 'Primary Args'
// };

// export const LongPrimaryA = Template.bind({});
// LongPrimaryA.args ={
//     ...PrimaryA.args,
//   //  children : 'Long Primary Args'
// }
