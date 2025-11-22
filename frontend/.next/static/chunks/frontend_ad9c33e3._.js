(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/abi/MentalHealthSurveyAddresses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This file is auto-generated.
  Command: 'npm run genabi'
*/ __turbopack_context__.s([
    "MentalHealthSurveyAddresses",
    ()=>MentalHealthSurveyAddresses
]);
const MentalHealthSurveyAddresses = {
    "11155111": {
        address: "0xc2cDA9F3516f038E9276d608015f1623838b9B1E",
        chainId: 11155111,
        chainName: "sepolia"
    },
    "31337": {
        address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
        chainId: 31337,
        chainName: "hardhat"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/abi/MentalHealthSurveyABI.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This file is auto-generated.
  Command: 'npm run genabi'
*/ __turbopack_context__.s([
    "MentalHealthSurveyABI",
    ()=>MentalHealthSurveyABI
]);
const MentalHealthSurveyABI = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getAnxietyLevel",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getEnergyLevel",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getMoodScore",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getSleepQuality",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getStressLevel",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getSurvey",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "stressLevel",
                    "type": "bytes32"
                },
                {
                    "internalType": "euint32",
                    "name": "anxietyLevel",
                    "type": "bytes32"
                },
                {
                    "internalType": "euint32",
                    "name": "moodScore",
                    "type": "bytes32"
                },
                {
                    "internalType": "euint32",
                    "name": "sleepQuality",
                    "type": "bytes32"
                },
                {
                    "internalType": "euint32",
                    "name": "energyLevel",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "getSurveyCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getSurveyTimestamp",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "protocolId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "externalEuint32",
                    "name": "stressLevel",
                    "type": "bytes32"
                },
                {
                    "internalType": "externalEuint32",
                    "name": "anxietyLevel",
                    "type": "bytes32"
                },
                {
                    "internalType": "externalEuint32",
                    "name": "moodScore",
                    "type": "bytes32"
                },
                {
                    "internalType": "externalEuint32",
                    "name": "sleepQuality",
                    "type": "bytes32"
                },
                {
                    "internalType": "externalEuint32",
                    "name": "energyLevel",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "inputProof",
                    "type": "bytes"
                }
            ],
            "name": "submitSurvey",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/internal/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDK_CDN_URL",
    ()=>SDK_CDN_URL
]);
const SDK_CDN_URL = "https://cdn.zama.ai/relayer-sdk-js/0.2.0/relayer-sdk-js.umd.cjs";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/internal/RelayerSDKLoader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelayerSDKLoader",
    ()=>RelayerSDKLoader,
    "isFhevmWindowType",
    ()=>isFhevmWindowType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/constants.ts [app-client] (ecmascript)");
;
;
class RelayerSDKLoader {
    isLoaded() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return isFhevmWindowType(window, this._trace);
    }
    load() {
        console.log("[RelayerSDKLoader] load...");
        // Ensure this only runs in the browser
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ("relayerSDK" in window) {
            if (!isFhevmRelayerSDKType(window.relayerSDK, this._trace)) {
                console.log("[RelayerSDKLoader] window.relayerSDK === undefined");
                throw new Error("RelayerSDKLoader: Unable to load FHEVM Relayer SDK");
            }
            return Promise.resolve();
        }
        return new Promise((resolve, reject)=>{
            const existingScript = document.querySelector('script[src="'.concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"], '"]'));
            if (existingScript) {
                if (!isFhevmWindowType(window, this._trace)) {
                    reject(new Error("RelayerSDKLoader: window object does not contain a valid relayerSDK object."));
                }
                resolve();
                return;
            }
            const script = document.createElement("script");
            script.src = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"];
            script.type = "text/javascript";
            script.async = true;
            script.onload = ()=>{
                if (!isFhevmWindowType(window, this._trace)) {
                    console.log("[RelayerSDKLoader] script onload FAILED...");
                    reject(new Error("RelayerSDKLoader: Relayer SDK script has been successfully loaded from ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"], ", however, the window.relayerSDK object is invalid.")));
                }
                resolve();
            };
            script.onerror = ()=>{
                console.log("[RelayerSDKLoader] script onerror... ");
                reject(new Error("RelayerSDKLoader: Failed to load Relayer SDK from ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"])));
            };
            console.log("[RelayerSDKLoader] add script to DOM...");
            document.head.appendChild(script);
            console.log("[RelayerSDKLoader] script added!");
        });
    }
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_trace", void 0);
        this._trace = options.trace;
    }
}
function isFhevmRelayerSDKType(o, trace) {
    if (typeof o === "undefined") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK is undefined");
        return false;
    }
    if (o === null) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK is null");
        return false;
    }
    if (typeof o !== "object") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK is not an object");
        return false;
    }
    if (!objHasProperty(o, "initSDK", "function", trace)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.initSDK is invalid");
        return false;
    }
    if (!objHasProperty(o, "createInstance", "function", trace)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.createInstance is invalid");
        return false;
    }
    if (!objHasProperty(o, "SepoliaConfig", "object", trace)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.SepoliaConfig is invalid");
        return false;
    }
    if ("__initialized__" in o) {
        if (o.__initialized__ !== true && o.__initialized__ !== false) {
            trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.__initialized__ is invalid");
            return false;
        }
    }
    return true;
}
function isFhevmWindowType(win, trace) {
    if (typeof win === "undefined") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window object is undefined");
        return false;
    }
    if (win === null) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window object is null");
        return false;
    }
    if (typeof win !== "object") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window is not an object");
        return false;
    }
    if (!("relayerSDK" in win)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window does not contain 'relayerSDK' property");
        return false;
    }
    return isFhevmRelayerSDKType(win.relayerSDK);
}
function objHasProperty(obj, propertyName, propertyType, trace) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (!(propertyName in obj)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: missing ".concat(String(propertyName), "."));
        return false;
    }
    const value = obj[propertyName];
    if (value === null || value === undefined) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: ".concat(String(propertyName), " is null or undefined."));
        return false;
    }
    if (typeof value !== propertyType) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: ".concat(String(propertyName), " is not a ").concat(propertyType, "."));
        return false;
    }
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/internal/PublicKeyStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publicKeyStorageGet",
    ()=>publicKeyStorageGet,
    "publicKeyStorageSet",
    ()=>publicKeyStorageSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/idb/build/index.js [app-client] (ecmascript)");
;
let __dbPromise = undefined;
async function _getDB() {
    if (__dbPromise) {
        return __dbPromise;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    __dbPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])("fhevm", 1, {
        upgrade (db) {
            if (!db.objectStoreNames.contains("paramsStore")) {
                db.createObjectStore("paramsStore", {
                    keyPath: "acl"
                });
            }
            if (!db.objectStoreNames.contains("publicKeyStore")) {
                db.createObjectStore("publicKeyStore", {
                    keyPath: "acl"
                });
            }
        }
    });
    return __dbPromise;
}
function assertFhevmStoredPublicKey(value) {
    if (typeof value !== "object") {
        throw new Error("FhevmStoredPublicKey must be an object");
    }
    if (value === null) {
        return;
    }
    if (!("publicKeyId" in value)) {
        throw new Error("FhevmStoredPublicKey.publicKeyId does not exist");
    }
    if (typeof value.publicKeyId !== "string") {
        throw new Error("FhevmStoredPublicKey.publicKeyId must be a string");
    }
    if (!("publicKey" in value)) {
        throw new Error("FhevmStoredPublicKey.publicKey does not exist");
    }
    if (!(value.publicKey instanceof Uint8Array)) {
        throw new Error("FhevmStoredPublicKey.publicKey must be a Uint8Array");
    }
}
function assertFhevmStoredPublicParams(value) {
    if (typeof value !== "object") {
        throw new Error("FhevmStoredPublicParams must be an object");
    }
    if (value === null) {
        return;
    }
    if (!("publicParamsId" in value)) {
        throw new Error("FhevmStoredPublicParams.publicParamsId does not exist");
    }
    if (typeof value.publicParamsId !== "string") {
        throw new Error("FhevmStoredPublicParams.publicParamsId must be a string");
    }
    if (!("publicParams" in value)) {
        throw new Error("FhevmStoredPublicParams.publicParams does not exist");
    }
    if (!(value.publicParams instanceof Uint8Array)) {
        throw new Error("FhevmStoredPublicParams.publicParams must be a Uint8Array");
    }
}
async function publicKeyStorageGet(aclAddress) {
    const db = await _getDB();
    if (!db) {
        return {
            publicParams: null
        };
    }
    let storedPublicKey = null;
    try {
        const pk = await db.get("publicKeyStore", aclAddress);
        if (pk === null || pk === void 0 ? void 0 : pk.value) {
            assertFhevmStoredPublicKey(pk.value);
            storedPublicKey = pk.value;
        }
    } catch (e) {
    //
    }
    let storedPublicParams = null;
    try {
        const pp = await db.get("paramsStore", aclAddress);
        if (pp === null || pp === void 0 ? void 0 : pp.value) {
            assertFhevmStoredPublicParams(pp.value);
            storedPublicParams = pp.value;
        }
    } catch (e) {
    //
    }
    const publicKeyData = storedPublicKey === null || storedPublicKey === void 0 ? void 0 : storedPublicKey.publicKey;
    const publicKeyId = storedPublicKey === null || storedPublicKey === void 0 ? void 0 : storedPublicKey.publicKeyId;
    const publicParams = storedPublicParams ? {
        "2048": storedPublicParams
    } : null;
    let publicKey = undefined;
    if (publicKeyId && publicKeyData) {
        publicKey = {
            id: publicKeyId,
            data: publicKeyData
        };
    }
    return {
        ...publicKey !== undefined && {
            publicKey
        },
        publicParams
    };
}
async function publicKeyStorageSet(aclAddress, publicKey, publicParams) {
    assertFhevmStoredPublicKey(publicKey);
    assertFhevmStoredPublicParams(publicParams);
    const db = await _getDB();
    if (!db) {
        return;
    }
    if (publicKey) {
        await db.put("publicKeyStore", {
            acl: aclAddress,
            value: publicKey
        });
    }
    if (publicParams) {
        await db.put("paramsStore", {
            acl: aclAddress,
            value: publicParams
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/internal/fhevm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmAbortError",
    ()=>FhevmAbortError,
    "FhevmReactError",
    ()=>FhevmReactError,
    "createFhevmInstance",
    ()=>createFhevmInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/RelayerSDKLoader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/PublicKeyStorage.ts [app-client] (ecmascript)");
;
;
;
;
class FhevmReactError extends Error {
    constructor(code, message, options){
        super(message, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0);
        this.code = code;
        this.name = "FhevmReactError";
    }
}
function throwFhevmError(code, message, cause) {
    throw new FhevmReactError(code, message, cause ? {
        cause
    } : undefined);
}
const isFhevmInitialized = ()=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        return false;
    }
    return window.relayerSDK.__initialized__ === true;
};
const fhevmLoadSDK = ()=>{
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelayerSDKLoader"]({
        trace: console.log
    });
    return loader.load();
};
const fhevmInitSDK = async (options)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        throw new Error("window.relayerSDK is not available");
    }
    const result = await window.relayerSDK.initSDK(options);
    window.relayerSDK.__initialized__ = result;
    if (!result) {
        throw new Error("window.relayerSDK.initSDK failed.");
    }
    return true;
};
function checkIsAddress(a) {
    if (typeof a !== "string") {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(a)) {
        return false;
    }
    return true;
}
class FhevmAbortError extends Error {
    constructor(message = "FHEVM operation was cancelled"){
        super(message);
        this.name = "FhevmAbortError";
    }
}
async function getChainId(providerOrUrl) {
    if (typeof providerOrUrl === "string") {
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](providerOrUrl);
        return Number((await provider.getNetwork()).chainId);
    }
    const chainId = await providerOrUrl.request({
        method: "eth_chainId"
    });
    return Number.parseInt(chainId, 16);
}
async function getWeb3Client(rpcUrl) {
    const rpc = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
    try {
        const version = await rpc.send("web3_clientVersion", []);
        return version;
    } catch (e) {
        throwFhevmError("WEB3_CLIENTVERSION_ERROR", "The URL ".concat(rpcUrl, " is not a Web3 node or is not reachable. Please check the endpoint."), e);
    } finally{
        rpc.destroy();
    }
}
async function tryFetchFHEVMHardhatNodeRelayerMetadata(rpcUrl) {
    const version = await getWeb3Client(rpcUrl);
    if (typeof version !== "string" || !version.toLowerCase().includes("hardhat")) {
        // Not a Hardhat Node
        return undefined;
    }
    try {
        const metadata = await getFHEVMRelayerMetadata(rpcUrl);
        if (!metadata || typeof metadata !== "object") {
            return undefined;
        }
        if (!("ACLAddress" in metadata && typeof metadata.ACLAddress === "string" && metadata.ACLAddress.startsWith("0x"))) {
            return undefined;
        }
        if (!("InputVerifierAddress" in metadata && typeof metadata.InputVerifierAddress === "string" && metadata.InputVerifierAddress.startsWith("0x"))) {
            return undefined;
        }
        if (!("KMSVerifierAddress" in metadata && typeof metadata.KMSVerifierAddress === "string" && metadata.KMSVerifierAddress.startsWith("0x"))) {
            return undefined;
        }
        return metadata;
    } catch (e) {
        // Not a FHEVM Hardhat Node
        return undefined;
    }
}
async function getFHEVMRelayerMetadata(rpcUrl) {
    const rpc = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
    try {
        const version = await rpc.send("fhevm_relayer_metadata", []);
        return version;
    } catch (e) {
        throwFhevmError("FHEVM_RELAYER_METADATA_ERROR", "The URL ".concat(rpcUrl, " is not a FHEVM Hardhat node or is not reachable. Please check the endpoint."), e);
    } finally{
        rpc.destroy();
    }
}
async function resolve(providerOrUrl, mockChains) {
    // Resolve chainId
    const chainId = await getChainId(providerOrUrl);
    // Resolve rpc url
    let rpcUrl = typeof providerOrUrl === "string" ? providerOrUrl : undefined;
    const _mockChains = {
        31337: "http://localhost:8545",
        ...mockChains !== null && mockChains !== void 0 ? mockChains : {}
    };
    // Help Typescript solver here:
    if (Object.hasOwn(_mockChains, chainId)) {
        if (!rpcUrl) {
            rpcUrl = _mockChains[chainId];
        }
        return {
            isMock: true,
            chainId,
            rpcUrl
        };
    }
    return {
        isMock: false,
        chainId,
        rpcUrl
    };
}
const createFhevmInstance = async (parameters)=>{
    const throwIfAborted = ()=>{
        if (signal.aborted) throw new FhevmAbortError();
    };
    const notify = (status)=>{
        if (onStatusChange) onStatusChange(status);
    };
    const { signal, onStatusChange, provider: providerOrUrl, mockChains } = parameters;
    // Resolve chainId
    const { isMock, rpcUrl, chainId } = await resolve(providerOrUrl, mockChains);
    if (isMock) {
        // Throws an error if cannot connect or url does not refer to a Web3 client
        const fhevmRelayerMetadata = await tryFetchFHEVMHardhatNodeRelayerMetadata(rpcUrl);
        if (fhevmRelayerMetadata) {
            // fhevmRelayerMetadata is defined, which means rpcUrl refers to a FHEVM Hardhat Node
            notify("creating");
            //////////////////////////////////////////////////////////////////////////
            // 
            // WARNING!!
            // ALWAY USE DYNAMIC IMPORT TO AVOID INCLUDING THE ENTIRE FHEVM MOCK LIB 
            // IN THE FINAL PRODUCTION BUNDLE!!
            // 
            //////////////////////////////////////////////////////////////////////////
            const fhevmMock = await __turbopack_context__.A("[project]/frontend/fhevm/internal/mock/fhevmMock.ts [app-client] (ecmascript, async loader)");
            const mockInstance = await fhevmMock.fhevmMockCreateInstance({
                rpcUrl,
                chainId,
                metadata: fhevmRelayerMetadata
            });
            throwIfAborted();
            return mockInstance;
        }
    }
    throwIfAborted();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        notify("sdk-loading");
        // throws an error if failed
        await fhevmLoadSDK();
        throwIfAborted();
        notify("sdk-loaded");
    }
    // notify that state === "sdk-loaded"
    if (!isFhevmInitialized()) {
        notify("sdk-initializing");
        // throws an error if failed
        await fhevmInitSDK();
        throwIfAborted();
        notify("sdk-initialized");
    }
    const relayerSDK = window.relayerSDK;
    const aclAddress = relayerSDK.SepoliaConfig.aclContractAddress;
    if (!checkIsAddress(aclAddress)) {
        throw new Error("Invalid address: ".concat(aclAddress));
    }
    const pub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicKeyStorageGet"])(aclAddress);
    throwIfAborted();
    const config = {
        ...relayerSDK.SepoliaConfig,
        network: providerOrUrl,
        publicKey: pub.publicKey,
        publicParams: pub.publicParams
    };
    // notify that state === "creating"
    notify("creating");
    const instance = await relayerSDK.createInstance(config);
    // Save the key even if aborted
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicKeyStorageSet"])(aclAddress, instance.getPublicKey(), instance.getPublicParams(2048));
    throwIfAborted();
    return instance;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/useFhevm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFhevm",
    ()=>useFhevm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/fhevm.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function _assert(condition, message) {
    if (!condition) {
        const m = message ? "Assertion failed: ".concat(message) : "Assertion failed.";
        console.error(m);
        throw new Error(m);
    }
}
function useFhevm(parameters) {
    _s();
    const { provider, chainId, initialMockChains, enabled = true } = parameters;
    const [instance, _setInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [status, _setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, _setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [_isRunning, _setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(enabled);
    const [_providerChanged, _setProviderChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const _abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const _providerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(provider);
    const _chainIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chainId);
    const _mockChainsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialMockChains);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFhevm.useCallback[refresh]": ()=>{
            // Provider or chainId has changed. Abort immediately
            if (_abortControllerRef.current) {
                // Make sure _providerRef.current + _chainIdRef.current are undefined during abort
                _providerRef.current = undefined;
                _chainIdRef.current = undefined;
                _abortControllerRef.current.abort();
                _abortControllerRef.current = null;
            }
            _providerRef.current = provider;
            _chainIdRef.current = chainId;
            // Nullify instance immediately
            _setInstance(undefined);
            _setError(undefined);
            _setStatus("idle");
            if (provider !== undefined) {
                // Force call main useEffect
                _setProviderChanged({
                    "useFhevm.useCallback[refresh]": (prev)=>prev + 1
                }["useFhevm.useCallback[refresh]"]);
            }
        // Do not modify the running flag.
        }
    }["useFhevm.useCallback[refresh]"], [
        provider,
        chainId
    ]);
    // Merge in main useEffect!!!
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFhevm.useEffect": ()=>{
            refresh();
        }
    }["useFhevm.useEffect"], [
        refresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFhevm.useEffect": ()=>{
            _setIsRunning(enabled);
        }
    }["useFhevm.useEffect"], [
        enabled
    ]);
    // Main useEffect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFhevm.useEffect": ()=>{
            // is _providerRef.current valid here ?
            // even if the first useEffect is rendered in the same render-cycle ?
            if (_isRunning === false) {
                // cancelled
                console.log("cancelled");
                if (_abortControllerRef.current) {
                    _abortControllerRef.current.abort();
                    _abortControllerRef.current = null;
                }
                // May already be null if provider was changed in the previous render-cycle
                _setInstance(undefined);
                _setError(undefined);
                _setStatus("idle");
                return;
            }
            if (_isRunning === true) {
                if (_providerRef.current === undefined) {
                    // instance should be undefined
                    // this code below should be unecessary
                    _setInstance(undefined);
                    _setError(undefined);
                    _setStatus("idle");
                    return;
                }
                if (!_abortControllerRef.current) {
                    _abortControllerRef.current = new AbortController();
                }
                _assert(!_abortControllerRef.current.signal.aborted, "!controllerRef.current.signal.aborted");
                // Keep old instance
                // Was set to undefined if provider changed
                _setStatus("loading");
                _setError(undefined);
                const thisSignal = _abortControllerRef.current.signal;
                const thisProvider = _providerRef.current;
                // Can be undefined, if so, call eth_chainId
                const thisRpcUrlsByChainId = _mockChainsRef.current;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFhevmInstance"])({
                    signal: thisSignal,
                    provider: thisProvider,
                    mockChains: thisRpcUrlsByChainId,
                    onStatusChange: {
                        "useFhevm.useEffect": (s)=>console.log("[useFhevm] createFhevmInstance status changed: ".concat(s))
                    }["useFhevm.useEffect"]
                }).then({
                    "useFhevm.useEffect": (i)=>{
                        console.log("[useFhevm] createFhevmInstance created!");
                        //console.log(`completed (runId=${thisRunId})...`);
                        if (thisSignal.aborted) return;
                        // is there a edge case where the assert below would fail ?
                        // it's not possible to have a _providerRef modified without a prior abort
                        _assert(thisProvider === _providerRef.current, "thisProvider === _providerRef.current");
                        _setInstance(i);
                        _setError(undefined);
                        _setStatus("ready");
                    }
                }["useFhevm.useEffect"]).catch({
                    "useFhevm.useEffect": (e)=>{
                        console.log("Error Was thrown !!! error... " + e.name);
                        if (thisSignal.aborted) return;
                        // it's not possible to have a _providerRef modified without a prior abort
                        _assert(thisProvider === _providerRef.current, "thisProvider === _providerRef.current");
                        _setInstance(undefined);
                        _setError(e);
                        _setStatus("error");
                    }
                }["useFhevm.useEffect"]);
            }
        }
    }["useFhevm.useEffect"], [
        _isRunning,
        _providerChanged
    ]);
    return {
        instance,
        refresh,
        error,
        status
    };
}
_s(useFhevm, "FnHDS2iQ+HIIYWVBLBtg967ZgT8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/useEthersSigner.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEthersSigner",
    ()=>useEthersSigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-browser.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function walletClientToSigner(walletClient) {
    var _chain_contracts_ensRegistry, _chain_contracts;
    const { account, chain, transport } = walletClient;
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: (_chain_contracts = chain.contracts) === null || _chain_contracts === void 0 ? void 0 : (_chain_contracts_ensRegistry = _chain_contracts.ensRegistry) === null || _chain_contracts_ensRegistry === void 0 ? void 0 : _chain_contracts_ensRegistry.address
    };
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserProvider"](transport, network);
    const signer = provider.getSigner(account.address);
    return signer;
}
function useEthersSigner() {
    let { chainId } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const { data: walletClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletClient"])({
        chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useEthersSigner.useMemo": ()=>walletClient ? walletClientToSigner(walletClient) : undefined
    }["useEthersSigner.useMemo"], [
        walletClient
    ]);
}
_s(useEthersSigner, "vfVS/4VJW/mjjsXkOCTaGc/C+9E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletClient"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/FhevmDecryptionSignature.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmDecryptionSignature",
    ()=>FhevmDecryptionSignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
;
;
;
function _timestampNow() {
    return Math.floor(Date.now() / 1000);
}
var _contractAddresses = /*#__PURE__*/ new WeakMap(), _userAddress = /*#__PURE__*/ new WeakMap(), _publicKey = /*#__PURE__*/ new WeakMap(), _key = /*#__PURE__*/ new WeakMap();
class FhevmDecryptionSignatureStorageKey {
    get contractAddresses() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses);
    }
    get userAddress() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress);
    }
    get publicKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey);
    }
    get key() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _key);
    }
    constructor(instance, contractAddresses, userAddress, publicKey){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _key, {
            writable: true,
            value: void 0
        });
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(userAddress)) {
            throw new TypeError("Invalid address ".concat(userAddress));
        }
        const sortedContractAddresses = contractAddresses.sort();
        const emptyEIP712 = instance.createEIP712(publicKey !== null && publicKey !== void 0 ? publicKey : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress, sortedContractAddresses, 0, 0);
        try {
            const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].TypedDataEncoder.hash(emptyEIP712.domain, {
                UserDecryptRequestVerification: emptyEIP712.types.UserDecryptRequestVerification
            }, emptyEIP712.message);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses, sortedContractAddresses);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress, userAddress);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _key, "".concat(userAddress, ":").concat(hash));
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
var _publicKey1 = /*#__PURE__*/ new WeakMap(), _privateKey = /*#__PURE__*/ new WeakMap(), _signature = /*#__PURE__*/ new WeakMap(), _startTimestamp = /*#__PURE__*/ new WeakMap(), _durationDays = /*#__PURE__*/ new WeakMap(), _userAddress1 = /*#__PURE__*/ new WeakMap(), _contractAddresses1 = /*#__PURE__*/ new WeakMap(), _eip712 = /*#__PURE__*/ new WeakMap();
class FhevmDecryptionSignature {
    get privateKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey);
    }
    get publicKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1);
    }
    get signature() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature);
    }
    get contractAddresses() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1);
    }
    get startTimestamp() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp);
    }
    get durationDays() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays);
    }
    get userAddress() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1);
    }
    static checkIs(s) {
        if (!s || typeof s !== "object") {
            return false;
        }
        if (!("publicKey" in s && typeof s.publicKey === "string")) {
            return false;
        }
        if (!("privateKey" in s && typeof s.privateKey === "string")) {
            return false;
        }
        if (!("signature" in s && typeof s.signature === "string")) {
            return false;
        }
        if (!("startTimestamp" in s && typeof s.startTimestamp === "number")) {
            return false;
        }
        if (!("durationDays" in s && typeof s.durationDays === "number")) {
            return false;
        }
        if (!("contractAddresses" in s && Array.isArray(s.contractAddresses))) {
            return false;
        }
        for(let i = 0; i < s.contractAddresses.length; ++i){
            if (typeof s.contractAddresses[i] !== "string") return false;
            if (!s.contractAddresses[i].startsWith("0x")) return false;
        }
        if (!("userAddress" in s && typeof s.userAddress === "string" && s.userAddress.startsWith("0x"))) {
            return false;
        }
        if (!("eip712" in s && typeof s.eip712 === "object" && s.eip712 !== null)) {
            return false;
        }
        // Partial type check
        if (!("domain" in s.eip712 && typeof s.eip712.domain === "object")) {
            return false;
        }
        if (!("primaryType" in s.eip712 && typeof s.eip712.primaryType === "string")) {
            return false;
        }
        if (!("message" in s.eip712)) {
            return false;
        }
        if (!("types" in s.eip712 && typeof s.eip712.types === "object" && s.eip712.types !== null)) {
            return false;
        }
        return true;
    }
    toJSON() {
        return {
            publicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1),
            privateKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey),
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature),
            startTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp),
            durationDays: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays),
            userAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1),
            contractAddresses: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1),
            eip712: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eip712)
        };
    }
    static fromJSON(json) {
        const data = typeof json === "string" ? JSON.parse(json) : json;
        return new FhevmDecryptionSignature(data);
    }
    equals(s) {
        return s.signature === (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature);
    }
    isValid() {
        return _timestampNow() < (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays) * 24 * 60 * 60;
    }
    async saveToGenericStringStorage(storage, instance, withPublicKey) {
        try {
            const value = JSON.stringify(this);
            const storageKey = new FhevmDecryptionSignatureStorageKey(instance, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1), withPublicKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1) : undefined);
            await storage.setItem(storageKey.key, value);
            console.log("signature saved! contracts=".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1).length));
        } catch (e) {
            console.error("FhevmDecryptionSignature.saveToGenericStringStorage() failed!");
        }
    }
    static async loadFromGenericStringStorage(storage, instance, contractAddresses, userAddress, publicKey) {
        try {
            const storageKey = new FhevmDecryptionSignatureStorageKey(instance, contractAddresses, userAddress, publicKey);
            const result = await storage.getItem(storageKey.key);
            if (!result) {
                console.warn("Could not load signature! key=".concat(storageKey.key));
                return null;
            }
            try {
                const kps = FhevmDecryptionSignature.fromJSON(result);
                if (!kps.isValid()) {
                    return null;
                }
                return kps;
            } catch (e) {
                return null;
            }
        } catch (e) {
            console.error("FhevmDecryptionSignature.loadFromGenericStringStorage() failed!");
            return null;
        }
    }
    static async new(instance, contractAddresses, publicKey, privateKey, signer) {
        try {
            const userAddress = await signer.getAddress();
            const startTimestamp = _timestampNow();
            const durationDays = 365;
            const eip712 = instance.createEIP712(publicKey, contractAddresses, startTimestamp, durationDays);
            const signature = await signer.signTypedData(eip712.domain, {
                UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification
            }, eip712.message);
            return new FhevmDecryptionSignature({
                publicKey,
                privateKey,
                contractAddresses: contractAddresses,
                startTimestamp,
                durationDays,
                signature,
                eip712: eip712,
                userAddress
            });
        } catch (e) {
            return null;
        }
    }
    static async loadOrSign(instance, contractAddresses, signer, storage, keyPair) {
        const userAddress = await signer.getAddress();
        const cached = await FhevmDecryptionSignature.loadFromGenericStringStorage(storage, instance, contractAddresses, userAddress, keyPair === null || keyPair === void 0 ? void 0 : keyPair.publicKey);
        if (cached) {
            return cached;
        }
        const { publicKey, privateKey } = keyPair !== null && keyPair !== void 0 ? keyPair : instance.generateKeypair();
        const sig = await FhevmDecryptionSignature.new(instance, contractAddresses, publicKey, privateKey, signer);
        if (!sig) {
            return null;
        }
        await sig.saveToGenericStringStorage(storage, instance, Boolean(keyPair === null || keyPair === void 0 ? void 0 : keyPair.publicKey));
        return sig;
    }
    constructor(parameters){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp, {
            writable: true,
            value: void 0
        }); // Unix timestamp in seconds
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eip712, {
            writable: true,
            value: void 0
        });
        if (!FhevmDecryptionSignature.checkIs(parameters)) {
            throw new TypeError("Invalid FhevmDecryptionSignatureType");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1, parameters.publicKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey, parameters.privateKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature, parameters.signature);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp, parameters.startTimestamp);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays, parameters.durationDays);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1, parameters.userAddress);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1, parameters.contractAddresses);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eip712, parameters.eip712);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/MentalHealthSurveyApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MentalHealthSurveyApp",
    ()=>MentalHealthSurveyApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyAddresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/abi/MentalHealthSurveyAddresses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/abi/MentalHealthSurveyABI.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/useFhevm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useEthersSigner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useInMemoryStorage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/FhevmDecryptionSignature.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function MentalHealthSurveyApp() {
    _s();
    const { address, isConnected, chainId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { storage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInMemoryStorage"])();
    const signerPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEthersSigner"])({
        chainId
    });
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    // Get provider from wagmi
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MentalHealthSurveyApp.useMemo[provider]": ()=>{
            if ("object" === "undefined" || !window.ethereum) return undefined;
            return window.ethereum;
        }
    }["MentalHealthSurveyApp.useMemo[provider]"], []);
    // Initialize FHEVM instance
    const { instance: fhevmInstance, status: fhevmStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFhevm"])({
        provider,
        chainId,
        enabled: isConnected && !!chainId
    });
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        stressLevel: "",
        anxietyLevel: "",
        moodScore: "",
        sleepQuality: "",
        energyLevel: ""
    });
    const [surveyCount, setSurveyCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0n);
    const [decryptedSurveys, setDecryptedSurveys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const contractAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MentalHealthSurveyApp.useMemo[contractAddress]": ()=>{
            if (!chainId) return undefined;
            const addr = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyAddresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentalHealthSurveyAddresses"][chainId.toString()];
            return addr === null || addr === void 0 ? void 0 : addr.address;
        }
    }["MentalHealthSurveyApp.useMemo[contractAddress]"], [
        chainId
    ]);
    const { data: count, error: readError, refetch: refetchCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentalHealthSurveyABI"].abi,
        functionName: "getSurveyCount",
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: !!address && !!contractAddress && contractAddress !== "0x0000000000000000000000000000000000000000",
            retry: 1
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MentalHealthSurveyApp.useEffect": ()=>{
            if (readError) {
                console.error("Contract read error:", readError);
                setMessage("Error reading contract: ".concat(readError.message));
            }
        }
    }["MentalHealthSurveyApp.useEffect"], [
        readError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MentalHealthSurveyApp.useEffect": ()=>{
            if (count !== undefined) {
                setSurveyCount(count);
            }
        }
    }["MentalHealthSurveyApp.useEffect"], [
        count
    ]);
    // Note: Transaction confirmation is handled in handleSubmit
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!address || !contractAddress) {
            setMessage("Please connect your wallet");
            return;
        }
        if (!fhevmInstance || fhevmStatus !== "ready") {
            setMessage("FHEVM encryption service is not ready. Please wait...");
            return;
        }
        if (!signerPromise) {
            setMessage("Wallet signer is not available");
            return;
        }
        setLoading(true);
        setMessage("");
        // Capture current chainId and contractAddress at the start
        const initialChainId = chainId;
        const initialContractAddress = contractAddress;
        try {
            setMessage("Encrypting survey data...");
            // Parse form values
            const stressLevel = parseInt(form.stressLevel);
            const anxietyLevel = parseInt(form.anxietyLevel);
            const moodScore = parseInt(form.moodScore);
            const sleepQuality = parseInt(form.sleepQuality);
            const energyLevel = parseInt(form.energyLevel);
            // Validate values
            if (isNaN(stressLevel) || isNaN(anxietyLevel) || isNaN(moodScore) || isNaN(sleepQuality) || isNaN(energyLevel) || stressLevel < 0 || stressLevel > 100 || anxietyLevel < 0 || anxietyLevel > 100 || moodScore < 0 || moodScore > 100 || sleepQuality < 0 || sleepQuality > 100 || energyLevel < 0 || energyLevel > 100) {
                setMessage("Please enter valid values between 0 and 100");
                setLoading(false);
                return;
            }
            // Check if chain or contract address changed before encryption
            if (chainId !== initialChainId || contractAddress !== initialContractAddress) {
                setMessage("Chain or contract changed. Please try again.");
                setLoading(false);
                return;
            }
            // Create encrypted input
            const input = fhevmInstance.createEncryptedInput(contractAddress, address);
            input.add32(BigInt(stressLevel));
            input.add32(BigInt(anxietyLevel));
            input.add32(BigInt(moodScore));
            input.add32(BigInt(sleepQuality));
            input.add32(BigInt(energyLevel));
            // Encrypt with retry logic (this is CPU-intensive and may fail due to relayer issues)
            let encrypted;
            let retryCount = 0;
            const maxRetries = 3;
            while(retryCount < maxRetries){
                try {
                    setMessage("Encrypting survey data (attempt ".concat(retryCount + 1, "/").concat(maxRetries, ")..."));
                    // Let the browser repaint before running 'input.encrypt()' (CPU-costly)
                    await new Promise((resolve)=>setTimeout(resolve, 100));
                    encrypted = await input.encrypt();
                    console.log("FHE encryption successful");
                    break;
                } catch (encryptError) {
                    retryCount++;
                    console.warn("FHE encryption attempt ".concat(retryCount, " failed:"), encryptError.message);
                    if (retryCount >= maxRetries) {
                        const errorMsg = encryptError.message || "Unknown encryption error";
                        if (errorMsg.includes("Bad JSON") || errorMsg.includes("Relayer")) {
                            setMessage("Relayer service error. Please check your network connection and try again later. Error: ".concat(errorMsg));
                        } else {
                            setMessage("Encryption failed after ".concat(maxRetries, " attempts: ").concat(errorMsg));
                        }
                        setLoading(false);
                        return;
                    }
                    // Wait before retry (exponential backoff)
                    const waitTime = Math.pow(2, retryCount) * 1000; // 2s, 4s, 8s
                    setMessage("Encryption failed, retrying in ".concat(waitTime / 1000, "s..."));
                    await new Promise((resolve)=>setTimeout(resolve, waitTime));
                }
            }
            if (!encrypted) {
                setMessage("Encryption failed. Please try again.");
                setLoading(false);
                return;
            }
            // Check if chain or contract address changed after encryption
            if (chainId !== initialChainId || contractAddress !== initialContractAddress) {
                setMessage("Chain or contract changed during encryption. Please try again.");
                setLoading(false);
                return;
            }
            setMessage("Submitting encrypted survey to blockchain...");
            // Get signer
            const signer = await signerPromise;
            if (!signer) {
                setMessage("Failed to get wallet signer");
                setLoading(false);
                return;
            }
            // Create contract instance and submit
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](contractAddress, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentalHealthSurveyABI"].abi, signer);
            setMessage("Please confirm the transaction in your wallet...");
            // Submit transaction - this will trigger wallet popup
            const tx = await contract.submitSurvey(encrypted.handles[0], encrypted.handles[1], encrypted.handles[2], encrypted.handles[3], encrypted.handles[4], encrypted.inputProof);
            setMessage("Transaction submitted! Waiting for confirmation...");
            // Wait for transaction confirmation
            const receipt = await tx.wait();
            setMessage("Survey submitted and confirmed! Transaction hash: ".concat(receipt.hash));
            // Reset form
            setForm({
                stressLevel: "",
                anxietyLevel: "",
                moodScore: "",
                sleepQuality: "",
                energyLevel: ""
            });
            // Refresh survey count after a short delay
            setTimeout(()=>{
                refetchCount();
            }, 1000);
        } catch (error) {
            console.error("Submit error:", error);
            setMessage((error === null || error === void 0 ? void 0 : error.message) || "Failed to submit survey");
        } finally{
            setLoading(false);
        }
    };
    const handleDecrypt = async (index)=>{
        if (!address || !contractAddress) {
            setMessage("Please connect your wallet");
            return;
        }
        if (!fhevmInstance || fhevmStatus !== "ready") {
            setMessage("FHEVM decryption service is not ready. Please wait...");
            return;
        }
        if (!signerPromise) {
            setMessage("Wallet signer is not available");
            return;
        }
        setLoading(true);
        setMessage("");
        try {
            setMessage("Retrieving encrypted survey data...");
            if (!publicClient || !contractAddress) {
                setMessage("Public client or contract address not available");
                setLoading(false);
                return;
            }
            // Get encrypted handles from contract
            const [stressLevelHandle, anxietyLevelHandle, moodScoreHandle, sleepQualityHandle, energyLevelHandle, timestamp] = await Promise.all([
                publicClient.readContract({
                    address: contractAddress,
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentalHealthSurveyABI"].abi,
                    functionName: "getStressLevel",
                    args: [
                        address,
                        BigInt(index)
                    ]
                }),
                publicClient.readContract({
                    address: contractAddress,
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentalHealthSurveyABI"].abi,
                    functionName: "getAnxietyLevel",
                    args: [
                        address,
                        BigInt(index)
                    ]
                }),
                publicClient.readContract({
                    address: contractAddress,
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentalHealthSurveyABI"].abi,
                    functionName: "getMoodScore",
                    args: [
                        address,
                        BigInt(index)
                    ]
                }),
                publicClient.readContract({
                    address: contractAddress,
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentalHealthSurveyABI"].abi,
                    functionName: "getSleepQuality",
                    args: [
                        address,
                        BigInt(index)
                    ]
                }),
                publicClient.readContract({
                    address: contractAddress,
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentalHealthSurveyABI"].abi,
                    functionName: "getEnergyLevel",
                    args: [
                        address,
                        BigInt(index)
                    ]
                }),
                publicClient.readContract({
                    address: contractAddress,
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$MentalHealthSurveyABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentalHealthSurveyABI"].abi,
                    functionName: "getSurveyTimestamp",
                    args: [
                        address,
                        BigInt(index)
                    ]
                })
            ]);
            if (!stressLevelHandle || !anxietyLevelHandle || !moodScoreHandle || !sleepQualityHandle || !energyLevelHandle) {
                setMessage("Failed to retrieve encrypted survey data");
                setLoading(false);
                return;
            }
            setMessage("Decrypting survey data...");
            // Get or create decryption signature
            const signer = await signerPromise;
            if (!signer) {
                setMessage("Failed to get wallet signer");
                setLoading(false);
                return;
            }
            const decryptionSignature = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmDecryptionSignature"].loadOrSign(fhevmInstance, [
                contractAddress
            ], signer, storage);
            if (!decryptionSignature) {
                setMessage("Failed to create decryption signature");
                setLoading(false);
                return;
            }
            // Prepare handle-contract pairs for decryption
            const handleContractPairs = [
                {
                    handle: stressLevelHandle,
                    contractAddress
                },
                {
                    handle: anxietyLevelHandle,
                    contractAddress
                },
                {
                    handle: moodScoreHandle,
                    contractAddress
                },
                {
                    handle: sleepQualityHandle,
                    contractAddress
                },
                {
                    handle: energyLevelHandle,
                    contractAddress
                }
            ];
            // Decrypt all values at once using userDecrypt
            // Note: signature should not have 0x prefix, and timestamps should be numbers
            const cleanSignature = decryptionSignature.signature.replace(/^0x/, "");
            const decryptedResults = await fhevmInstance.userDecrypt(handleContractPairs, decryptionSignature.privateKey, decryptionSignature.publicKey, cleanSignature, decryptionSignature.contractAddresses, decryptionSignature.userAddress, decryptionSignature.startTimestamp, decryptionSignature.durationDays);
            // Extract decrypted values from results
            const stressLevel = decryptedResults[stressLevelHandle];
            const anxietyLevel = decryptedResults[anxietyLevelHandle];
            const moodScore = decryptedResults[moodScoreHandle];
            const sleepQuality = decryptedResults[sleepQualityHandle];
            const energyLevel = decryptedResults[energyLevelHandle];
            // Update decrypted surveys
            const decryptedSurvey = {
                stressLevel: Number(stressLevel),
                anxietyLevel: Number(anxietyLevel),
                moodScore: Number(moodScore),
                sleepQuality: Number(sleepQuality),
                energyLevel: Number(energyLevel),
                timestamp: timestamp ? Number(timestamp) : Date.now()
            };
            setDecryptedSurveys((prev)=>{
                const updated = [
                    ...prev
                ];
                updated[index] = decryptedSurvey;
                return updated;
            });
            setMessage("Survey #".concat(index + 1, " decrypted successfully!"));
        } catch (error) {
            console.error("Decrypt error:", error);
            setMessage((error === null || error === void 0 ? void 0 : error.message) || "Failed to decrypt survey");
        } finally{
            setLoading(false);
        }
    };
    const onChange = (e)=>{
        const { name, value } = e.target;
        setForm((f)=>({
                ...f,
                [name]: value
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                    lineNumber: 427,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-lg p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold mb-4",
                        children: "Connect Your Wallet"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6",
                        children: "Please connect your wallet to start using the Encrypted Mental Health Survey"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"], {}, void 0, false, {
                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                lineNumber: 431,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-lg p-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold mb-4 text-gray-800",
                                children: "Submit Mental Health Survey"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: "Your responses are encrypted and stored securely. Only you can decrypt them."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Stress Level (0-100)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "stressLevel",
                                                min: "0",
                                                max: "100",
                                                required: true,
                                                value: form.stressLevel,
                                                onChange: onChange,
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                placeholder: "Enter stress level (0-100)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 453,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                        lineNumber: 449,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Anxiety Level (0-100)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 467,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "anxietyLevel",
                                                min: "0",
                                                max: "100",
                                                required: true,
                                                value: form.anxietyLevel,
                                                onChange: onChange,
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                placeholder: "Enter anxiety level (0-100)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 470,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Mood Score (0-100)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 484,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "moodScore",
                                                min: "0",
                                                max: "100",
                                                required: true,
                                                value: form.moodScore,
                                                onChange: onChange,
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                placeholder: "Enter mood score (0-100)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                        lineNumber: 483,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Sleep Quality (0-100)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 501,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "sleepQuality",
                                                min: "0",
                                                max: "100",
                                                required: true,
                                                value: form.sleepQuality,
                                                onChange: onChange,
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                placeholder: "Enter sleep quality (0-100)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 504,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                        lineNumber: 500,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Energy Level (0-100)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 518,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "energyLevel",
                                                min: "0",
                                                max: "100",
                                                required: true,
                                                value: form.energyLevel,
                                                onChange: onChange,
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                placeholder: "Enter energy level (0-100)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: loading ? "Submitting..." : "Submit Encrypted Survey"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                lineNumber: 448,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                        lineNumber: 440,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-lg p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold mb-4 text-gray-800",
                                children: "Survey History"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                lineNumber: 545,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-4",
                                children: [
                                    "You have ",
                                    surveyCount.toString(),
                                    " survey",
                                    surveyCount !== 1n ? "s" : "",
                                    " stored"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this),
                            surveyCount > 0n && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: Array.from({
                                    length: Number(surveyCount)
                                }).map((_, index)=>{
                                    const decrypted = decryptedSurveys[index];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-gray-800",
                                                                children: [
                                                                    "Survey #",
                                                                    index + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                lineNumber: 563,
                                                                columnNumber: 27
                                                            }, this),
                                                            decrypted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 mt-1",
                                                                children: new Date(decrypted.timestamp * 1000).toLocaleString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                lineNumber: 567,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDecrypt(index),
                                                        disabled: loading,
                                                        className: "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50",
                                                        children: decrypted ? "Re-decrypt" : "Decrypt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                        lineNumber: 572,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 561,
                                                columnNumber: 23
                                            }, this),
                                            decrypted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 space-y-2 bg-blue-50 p-3 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-gray-700",
                                                                    children: "Stress Level:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                    lineNumber: 584,
                                                                    columnNumber: 31
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-900",
                                                                    children: [
                                                                        decrypted.stressLevel,
                                                                        "/100"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                    lineNumber: 585,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                            lineNumber: 583,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-gray-700",
                                                                    children: "Anxiety Level:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                    lineNumber: 588,
                                                                    columnNumber: 31
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-900",
                                                                    children: [
                                                                        decrypted.anxietyLevel,
                                                                        "/100"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                    lineNumber: 589,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-gray-700",
                                                                    children: "Mood Score:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 31
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-900",
                                                                    children: [
                                                                        decrypted.moodScore,
                                                                        "/100"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                    lineNumber: 593,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                            lineNumber: 591,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-gray-700",
                                                                    children: "Sleep Quality:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                    lineNumber: 596,
                                                                    columnNumber: 31
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-900",
                                                                    children: [
                                                                        decrypted.sleepQuality,
                                                                        "/100"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                    lineNumber: 597,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                            lineNumber: 595,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-gray-700",
                                                                    children: "Energy Level:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                    lineNumber: 600,
                                                                    columnNumber: 31
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-900",
                                                                    children: [
                                                                        decrypted.energyLevel,
                                                                        "/100"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                                    lineNumber: 601,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                            lineNumber: 599,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 581,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mt-2",
                                                children: 'Encrypted data - Click "Decrypt" to view'
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                                lineNumber: 606,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                        lineNumber: 557,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                lineNumber: 553,
                                columnNumber: 15
                            }, this),
                            surveyCount === 0n && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-center py-8",
                                children: "No surveys submitted yet. Submit your first survey above!"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                                lineNumber: 617,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                        lineNumber: 544,
                        columnNumber: 11
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-blue-800",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                            lineNumber: 625,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
                        lineNumber: 624,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/MentalHealthSurveyApp.tsx",
        lineNumber: 425,
        columnNumber: 5
    }, this);
}
_s(MentalHealthSurveyApp, "SpPMtsWI3c0zhNJHGHRFPN2LvSg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInMemoryStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEthersSigner"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFhevm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
_c = MentalHealthSurveyApp;
var _c;
__turbopack_context__.k.register(_c, "MentalHealthSurveyApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_ad9c33e3._.js.map