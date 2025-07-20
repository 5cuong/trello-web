import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import  ThreeDRotation  from '@mui/icons-material/ThreeDRotation'
import  Typography  from '@mui/material/Typography'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>5cuong</div>
    <Typography variant="body2" color="text.secondary">Test Typography</Typography>
      <Button variant="contained">Hello workd</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>

      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default App
