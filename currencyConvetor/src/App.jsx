import { useState } from 'react'
import Input from './components/Input'
import useCurrency from './hooks/useCurrency'

function App() {
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)

  // const currencyInfo = useCurrency(from)

  const options = ['usd', 'inr', 'eur', 'gbp', 'aud', 'cad', 'sgd', 'chf', 'myr', 'jpy']
  // console.log(options)
  console.log(from)
  console.log(to)
  console.log(amount)
  console.log(convertedAmount)
  const swap = () => {
    setTo(from)
    setFrom(to)
  }

  const convert = () => {
    setConvertedAmount(amount * 5)
  }

  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onChangeAmount={(currency)=>
                                setAmount(currency)
                                }
                                selectCurrency={from}
                                onChangeCurrency={(currency)=>setFrom(currency)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onChangeAmount={(currency)=>
                                setAmount(currency)
                                }
                                selectCurrency={to}
                                onChangeCurrency={(currency)=>setTo(currency)}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
