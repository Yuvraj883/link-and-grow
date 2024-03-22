import { Typography, Button } from '@mui/material'
import { useState } from 'react'
import AiOutput from '../Components/AiOutput'
import Chip from '@mui/material/Chip'

const PostGeneration = () => {
  const key = process.env.REACT_APP_API_KEY
  const url = process.env.REACT_APP_API_URL
  const [input, setInput] = useState('')
  const [ans, setAns] = useState('')
  const [copied, setCopied] = useState(false)
  const [tone, setTone] = useState('professional')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setCopied(false)

    const myHeaders = {
      Authorization: key,
      'Content-Type': 'application/json',
    }

    const raw = JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `Your are a helpful assitant use ${tone} for generating content`,
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
    setAns(data?.choices[0]?.message?.content)
  }

  return (
    <>
      <main className='bg-red p-8 w-[85%] flex flex-row'>

        <div className='flex flex-col w-[40%]'>
        <Typography variant='h3'>Generate Post</Typography>
          <Typography variant='subtitle1'>
            Use the power of AI to generate content
          </Typography>

          <form className='flex flex-col '>
            <textarea
              className='shadow-sm px-4 py-2 my-2 border-2 border-gray-300 w-[100%] h-24'
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder='Describe your post...'
            />

          </form>

          <div className='mt-4 '>
            <Typography variant='h5'>Select tone of your voice</Typography>
            <div className='flex flex-row flex-wrap mt-2 p-6 gap-2'>
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('😄 Happy')}
                label='😄 Happy'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('🎉 Excited')}
                label='🎉 Excited'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('🤔 Curious')}
                label='🤔 Curious'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('🎨 Creative')}
                label='🎨 Creative'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('😟 Worried')}
                label='😟 Worried'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('😶 Candid')}
                label='😶 Candid'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('👕 Casual')}
                label='👕 Casual'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('😂 Funny')}
                label='😂 Funny'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('🌟 Encouraging')}
                label='🌟 Encouraging'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('💼 Professional')}
                label='💼 Professional'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('💖 Passionate')}
                label='💖 Passionate'
                variant='outlined'
              />
              <Chip
                className='cursor-pointer'
                onClick={() => setTone('🎭 Dramatic')}
                label='🎭 Dramatic'
                variant='outlined'
              />
            </div>
          </div>
          <Button
              variant='contained'
              className='w-[30%] mx-12 px-4'
              onClick={(e) => handleSubmit(e)}
            >
              Generate 🪄✨
            </Button>
        </div>
        {
          ans.length>0 &&
        <AiOutput ans={ans} copied={copied} setCopied={setCopied} />

        }
      </main>
    </>
  )
}
export default PostGeneration
