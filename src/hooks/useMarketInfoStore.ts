import {MarketInfoType} from "../utils/type.ts";
import {create} from "zustand";


interface State {
    marketInfo: MarketInfoType|null,
    moreInfoOpen: boolean,
    contactModalOpen: boolean,
    privacyModalOpen: boolean,
    refundModalOpen: boolean,
    shippingModalOpen: boolean,
}

interface Actions {
    setMarketInfo: (marketInfo: MarketInfoType|null) => void,
    toggleMoreInfoOpen: () => void,
    openContactModalOpen: () => void,
    closeContactModalOpen: () => void,
    openPrivacyModalOpen: () => void,
    closePrivacyModalOpen: () => void,
    openRefundModalOpen: () => void,
    closeRefundModalOpen: () => void,
    openShippingModalOpen: () => void,
    closeShippingModalOpen: () => void,
}

const useMarketInfoStore = create<State & Actions>((set) => ({
    marketInfo: null,
    moreInfoOpen: false,
    contactModalOpen: false,
    privacyModalOpen: false,
    refundModalOpen: false,
    shippingModalOpen: false,
    setMarketInfo: (marketInfo) => set({marketInfo}),
    toggleMoreInfoOpen: () => set(state => ({moreInfoOpen: !state.moreInfoOpen})),
    openContactModalOpen: () => {
        set({contactModalOpen: true});
        window.document.body.style.overflow = "hidden";
    },
    closeContactModalOpen: () => {
        set({contactModalOpen: false});
        window.document.body.style.overflow = "visible";
    },
    openPrivacyModalOpen: () => {
        set({privacyModalOpen: true});
        window.document.body.style.overflow = "hidden";
    },
    closePrivacyModalOpen: () => {
        set({privacyModalOpen: false});
        window.document.body.style.overflow = "visible";
    },
    openRefundModalOpen: () => {
        set({refundModalOpen: true});
        window.document.body.style.overflow = "hidden";
    },
    closeRefundModalOpen: () => {
        set({refundModalOpen: false});
        window.document.body.style.overflow = "visible";
    },
    openShippingModalOpen: () => {
        set({shippingModalOpen: true});
        window.document.body.style.overflow = "hidden";
    },
    closeShippingModalOpen: () => {
        set({shippingModalOpen: false});
        window.document.body.style.overflow = "visible";
    }
}))

export default useMarketInfoStore;