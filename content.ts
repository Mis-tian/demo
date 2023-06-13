import type { PlasmoCSConfig } from "plasmo"
import { onMessage } from 'webext-bridge/content-script'

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  run_at: "document_start",
  world: "MAIN"
}

 

onMessage('foo', ({ data }) => {
  // type of `data` will be `{ title: string }`
  console.log(data.title)
})