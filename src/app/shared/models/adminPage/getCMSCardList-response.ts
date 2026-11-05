

export class GetCMSCardListResponse {
    constructor(init?: Partial<GetCMSCardListResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    item!: Items[];
}

class Items {
    cardName!: string;
    cardOnlineAppLink!: string;
}