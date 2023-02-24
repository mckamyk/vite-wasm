import { useEffect, useState } from 'react';
import wasm from '../wasm/release.wasm?init'

type WasmFunc = (left: number, right: number) => number;

const wasmAdd: Promise<WasmFunc> = wasm({}).then(ins => ins.exports.add as WasmFunc)

export interface WasmThingy {
  add: (left: number, right: number) => number;
}

const WasmComponent = () => {
	const [left, setLeft] = useState<number>();
	const [right, setRight] = useState<number>();
	const [output, setOutput] = useState<number>();

	useEffect(() => {
		if (!left || !right) return
		wasmAdd.then(add => add(left, right)).then(res => setOutput(res))
	}, [left, right, setOutput])

	return (
		<div>
			<input className="" onChange={(e) => setLeft(Number(e.target.value))} />
			<div> + </div>
			<input onChange={(e) => setRight(Number(e.target.value))} />
			<div> = </div>
			<div>Output: {output}</div>
		</div>
	)
}

export default WasmComponent