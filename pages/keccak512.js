import { keccak_512 } from 'js-sha3'
import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'

export default function Home() {
    const [keccak512, setKeccak512] = useState('')
    const [copySuccess, setCopySuccess] = useState('')
    const textAreaRef = useRef(null)
    const [length, setLength] = useState(36)

    function getKeccak512Hash(input_string) {
        return keccak_512(input_string).slice(0, 40)
    }

    function getSecureKeccak512Hash(input_string, length) {
        return keccak_512(input_string).slice(0, length) + '@CTB'
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor='keccak512-input'>Input for Keccak512</label>
                    <input type='text' name='keccak512-input' value={keccak512} onChange={(e) => setKeccak512(e.target.value)} autoComplete='off' />
                    <label htmlFor='length-input'>Length</label>
                    <input type='number' name='length-input' value={length} onChange={(e) => setLength(e.target.value)} style={{ width: '50px' }} autoComplete='off' />
                    <p></p>
                    <h3 className='text-3xl font-bold underline'>Normal : {getKeccak512Hash(keccak512)}</h3>
                    <h3 className='text-3xl font-bold underline'>Secure : {getSecureKeccak512Hash(keccak512, 36)}</h3>
                    <h3 className='text-3xl font-bold underline'>Secure : {getSecureKeccak512Hash(keccak512, length)}</h3>
                    <button onClick={() => navigator.clipboard.writeText(getKeccak512Hash(keccak512))}>Copy The Hash</button>
                    <button onClick={() => navigator.clipboard.writeText(getSecureKeccak512Hash(keccak512, 36))}>Copy the secure hash</button>
                    <button onClick={() => navigator.clipboard.writeText(getSecureKeccak512Hash(keccak512, length))}>Copy the shortened secure hash</button>
                </div>
            </form>
        </div>
    )
}
