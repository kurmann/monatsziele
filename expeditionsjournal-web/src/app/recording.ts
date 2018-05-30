export class Recording {

    /**
     * The GUID of this recording
     */
    id?: string;

    /**
     * The related goal as GUID
     */
    goalId: string;

    /**
     * The date of the recording (can be different from the item createdDate)
     */
    date: Date;

    /**
     * The date this item has been created
     */
    itemCreatedDate?: Date;

}
