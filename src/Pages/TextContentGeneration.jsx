import { IconButton, Tooltip } from '@mui/material'
import { useEffect, useState } from 'react'
import { LuClipboardCopy } from 'react-icons/lu'
import { LuClipboardCheck } from 'react-icons/lu'
import DeleteIcon from '@mui/icons-material/Delete'

const TextContentGeneration = () => {
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState('')
  const [copy, setCopy] = useState(false)
  const url = ''
  const key = ''

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(answer)
      setCopy(true)
    } catch (error) {
      alert('Error copying the text')
    }
  }
  

  const handleSubmit = async (e) => {
    try {
      // Prevent the default form submission behavior temporarily
      e.preventDefault()

      const myHeaders = {
        Authorization: key,
        'Content-Type': 'application/json',
      }

      const raw = JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant',
          },
          {
            role: 'user',
            content: input,
          },
        ],
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }

      const res = await fetch(url, requestOptions)
      const data = await res.json()
      console.log(data)
      setAnswer(data?.choices[0]?.message?.content)
    } catch (error) {
      console.log(error)
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   console.log(e);

  //   const myHeaders = {
  //     Authorization: key,
  //     'Content-Type': 'application/json',
  //   }

  //   const raw = JSON.stringify({
  //     model: 'gpt-3.5-turbo',
  //     messages: [
  //       {
  //         role: 'system',
  //         content: 'You are a helpful assistant',
  //       },
  //       {
  //         role: 'user',
  //         content: input,
  //       },
  //     ],
  //   })

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow',
  //   }

  //   try {
  //     const res = await fetch(url, requestOptions)
  //     const data = await res.json()
  //     console.log(data)
  //     setAnswer(data?.choices[0]?.message?.content)
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   // alert("hello");
  // }

  // Reset copy state and tooltip position when answer changes
  useEffect(() => {
    setCopy(false)
  }, [answer])

  return (
    <div className='flex flex-col justify-center items-center p-5 rounded-md'>
      <h1 className='text-lg font-bold'>
        {answer ? "Here's your response" : 'Generate your content here'}
      </h1>
      {answer && (
        <div className='p-4 mx-auto w-[41%] shadow-md bg-blue-50 rounded-md'>
          {!copy && (
            <LuClipboardCopy
              onClick={copyToClipboard}
              className='ml-auto cursor-pointer'
            />
          )}
          {copy && <LuClipboardCheck className='cursor-pointer ml-auto' />}

          {/* <Tooltip className='ml-auto' title='Delete'>
            <IconButton>
              {copy && <LuClipboardCheck className='cursor-pointer ml-auto' />}
            </IconButton>
          </Tooltip> */}

          <p className='w-[80%] mx-auto'>{answer}</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center shadow-sm w-[60%] p-10'
      >
        <textarea
          onChange={(e) => setInput(e.target.value)}
          className='shadow-md px-6 py-3 w-[75%] h-[30vh] mb-6 rounded-md bg-gray-50'
          type='text'
          placeholder='Enter your prompt...'
        />

        {/* <button
          onClick={(e)=>handleSubmit(e)}
          className='bg-blue-700 hover:bg-blue-500 text-white font-semibold text-md w-[30%] mx-auto rounded-md py-2'
        >
          Generate
        </button> */}
        <button type='submit'>Generate</button>
      </form>
    </div>
  )
}

export default TextContentGeneration
