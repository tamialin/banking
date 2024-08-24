'use client';
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-fall'>
        <CountUp
        duration={1.5}
        decimals={2}
        decimal=','
        prefix='$'
        end={amount}
    />
    </div>
  )
}

export default AnimatedCounter