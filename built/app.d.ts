/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
/**
 * WearAHat Application - Showcasing avatar attachments.
 */
export default class WearAHat {
    private context;
    private params;
    private baseUrl;
    private assets;
    private attachedHats;
    private HatDatabase;
    private previewMargin;
    /**
     * Constructs a new instance of this class.
     * @param context The MRE SDK context.
     * @param baseUrl The baseUrl to this project's `./public` folder.
     */
    constructor(context: MRE.Context, params: MRE.ParameterSet, baseUrl: string);
    /**
     * Called when a Hats application session starts up.
     */
    private started;
    /**
     * Called when a user leaves the application (probably left the Altspace world where this app is running).
     * @param user The user that left the building.
     */
    private userLeft;
    /**
     * Show a menu of hat selections.
     */
    private showHatMenu;
    /**
     * Instantiate a hat and attach it to the avatar's head.
     * @param hatId The id of the hat in the hat database.
     * @param userId The id of the user we will attach the hat to.
     */
    private wearHat;
}
//# sourceMappingURL=app.d.ts.map