import React, {Fragment} from 'react';
import {Form} from '../../components/Form/Form';

import './Settings.scss';

export const Settings = () => {
    return (
        <Fragment>
            <div className="settings">
                <div className="settings__title">
                    School CI server
                </div>
                <div className="settings__subtitle">
                    Settings
                </div>
                <div>
                    Configure repository connection and synchronization settings.
                </div>
                <Form></Form>
            </div>
        </Fragment>
    )

}