import { useMoralis } from "react-moralis"

export default function ManualHeader() {
    const { enableWeb3 } = useMoralis()

    return (
        <div>
            <button
                onClick={async () => {
                    await enableWeb3()
                }}
            >
                Connect
            </button>
        </div>
    )
}

// this is the hard way

// this is the easy way