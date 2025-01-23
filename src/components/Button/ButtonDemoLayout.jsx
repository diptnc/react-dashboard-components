import React from 'react'
import Button from './Button'
import CodeBlockLayout from '../CodeBlock/CodeBlockLayout'
import { IoMdAddCircleOutline } from "react-icons/io";

const ButtonDemoLayout = () => {
    const buttonOnClick = () => {
        alert('Button clicked');
    }
    return (
        <div className='py-4 space-y-4'>
            <h3>Buttons</h3>

            <CodeBlockLayout text={`import Button from '@diptnc/react-dashboard-components';`} />

            <div className='pt-2'>variables colors needed in tailwind.config.js file</div>
            <CodeBlockLayout text={`colors: {
          'primary': '#5542F6',
          'primary-hover': '#7B42F6',
          'primary-text': 'white',
          'primary-text-hover': 'white',
          'primary-border': '#4734EB',
          'primary-border-hover': '#6E36E5',
        }`} />
         <div className='pt-2'>Add following in tailwind.config</div>
         <CodeBlockLayout text={`"node_modules/@diptnc/react-dashboard-components/**/*.{js,ts,jsx,tsx,mdx}"`} />
            <h4 >Default</h4>
            <CodeBlockLayout text={`<Button label={'Test Button'} type="default" onClickFunction={buttonOnClick} className='' disabled={false} icon={null}  arrow={true}/>`} />

            <h5 >Preview</h5>

            <Button label={'Test Button'} type="default" onClickFunction={buttonOnClick} className='' disabled={false} icon={null} arrow={true} />


            {/* disabled */}

            <h4 >Disabled</h4>
            <CodeBlockLayout text={`<Button label={'Disabled Button'} type="default" onClickFunction={buttonOnClick} className='' disabled={true} icon={null}  arrow={true}/>`} />

            <h5 >Preview</h5>

            <Button label={'Disabled Button'} type="default" onClickFunction={buttonOnClick} className='' disabled={true} icon={null} arrow={true} />

            {/* primary */}
            <h4 >Primary</h4>
            <CodeBlockLayout text={`<Button label={'Primary Button'} type="primary" onClickFunction={buttonOnClick} className='' disabled={false} icon={<IoMdAddCircleOutline />} arrow={true} />`} />

            <h5 >Preview</h5>

            <Button label={'Primary Button'} type="primary" onClickFunction={buttonOnClick} className='' disabled={false} icon={<IoMdAddCircleOutline />} arrow={true} />

            {/* danger */}
            <h4 >Danger</h4>
            <CodeBlockLayout text={`<Button label={'Danger Button'} type="danger" onClickFunction={buttonOnClick} className='' disabled={false}  arrow={false} />`} />

            <h5 >Preview</h5>

            <Button label={'Danger Button'} type="danger" onClickFunction={buttonOnClick} className='' disabled={false} arrow={false} />

            {/* cancel */}
            <h4 >Cancel</h4>
            <CodeBlockLayout text={`<Button label={'Cancel Button'} type="cancel" onClickFunction={buttonOnClick} className='' disabled={false}  arrow={false} />`} />

            <h5 >Preview</h5>

            <Button label={'Cancel Button'} type="cancel" onClickFunction={buttonOnClick} className='' disabled={false} arrow={false} />
        </div>
    )
    
}

export default ButtonDemoLayout