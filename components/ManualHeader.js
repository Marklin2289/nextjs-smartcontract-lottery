import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis()
    //  isWeb3Enabled is part of the useMoralis() function features

    useEffect(() => {
        // if (isWeb3Enabled) return
        // if (typeof window !== "undefined") {
        //     enableWeb3()
        // }
        if (
            !isWeb3Enabled &&
            typeof window !== "undefined" &&
            window.localStorage.getItem("connected")
        ) {
            enableWeb3()
        }

        // enableWeb3()
        // console.log("Hi !")
        // console.log(isWeb3Enabled)
        // console.log(account)
    }, [isWeb3Enabled]) //no dependencies array : run anytime something re-renders,
    // CAREFUL with this !! Because then you can get circular renders

    // with dependencies array: [something here]
    // automatically run on load twice because of strict mode
    // then it will run checking the value

    // with dependencies array: [] blank
    // run one time on load

    // another useEffect :
    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null account found")
            }
        })
    }, [])

    return (
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("connected", "injected")
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    Connect
                </button>
            )}
        </div>
    )
}

// this is the hard way

// this is the easy way
