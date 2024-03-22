import { LuClipboardCopy } from 'react-icons/lu'
import { LuClipboardCheck } from 'react-icons/lu'
import { Typography } from '@mui/material'


const AiOutput = (props)=>{
  const ans = props.ans;



  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(ans)
      props.setCopied(true)
    } catch (error) {
      alert("Couldn't copy due to " + error)
    }
  }

  return(
    <>
    <div className=' ml-6 px-4 py-2  w-[55%] shadow-md'>
        {
          !props.copied &&
            <LuClipboardCopy
            className='ml-auto cursor-pointer'
            onClick={()=>copyToClipBoard()}></LuClipboardCopy>
          }
           {
           ( props.copied)  &&
            <LuClipboardCheck
            className='ml-auto cursor-pointer'


            ></LuClipboardCheck>
          }
          {ans && (
            <>
              <Typography variant='h3'>Output</Typography>
              <Typography variant='subtitle1'>
                Here's your AI generated content. Feel free to make changes.
              </Typography>
              <div className='shadow-md mt-6 p-2 border-2 border-gray-300 h-[70%]'>
                <p className='text-gray-500 font-semibold'>
                  {ans.length} characters
                </p>

                <Typography variant='subtitle2' paragraph>
                  {ans}
                </Typography>
              </div>
            </>


          )}
        </div>

    </>
  )
}
export default AiOutput;
