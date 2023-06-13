import { sendMessage } from "webext-bridge/background";


chrome.action.onClicked.addListener(async () => {
    const returnData = await sendMessage(
        "foo",
        { title: true },
        "content-script"
    );
})
