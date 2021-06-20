import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './Form.scss';

export const Form = () => {
    const [repository, setRepository] = useState('');
    const [command, setCommand] = useState('');
    const [branch, setBranch] = useState('');
    const [period, setPeriod] = useState('');
    const [repositoryDirty, setRepositoryDirty] = useState(false);
    const [commandDirty, setCommandDirty] = useState(false);
    const [repositoryError, setRepositoryError] = useState('Обязательное поле для ввода');
    const [commandError, setCommandError] = useState('Обязательное поле для ввода');
    const [formValid, setFormValid] = useState(false);

    let submitJson = {
        "data": {
            "repoName": repository || '',
            "buildCommand": command || '',
            "mainBranch": branch || '',
            "period": period || 0
        }
    }

    useEffect(() => {
        (commandError || repositoryError) ? setFormValid(false) : setFormValid(true);
    }, [commandError, repositoryError])

    const repositoryHandler = (e) => {
        setRepository(e.target.value);
        submitJson.data.repoName = e.target.value;
        if (e.target.value.length) {
            setRepositoryError('');
        }
    }

    const commandHandler = (e) => {
        setCommand(e.target.value);
        submitJson.data.buildCommand = e.target.value;
        if (e.target.value.length) {
            setCommandError('');
        }
    }

    const branchHandler = (e) => {
        setBranch(e.target.value);
        submitJson.data.mainBranch = e.target.value;
    }

    const periodHandler = (e) => {
        setPeriod(e.target.value);
        submitJson.data.period = e.target.value;
    }

    const blurHandler = (e) => {
        if (e.target.name === 'repository') {
            setRepositoryDirty(true);
        } else if (e.target.name === 'command') {
            setCommandDirty(true);
        }
    }

    function clearInput(fn, fnDirty, fnError) {
        fn('');
        fnDirty(false);
        fnError('Обязательное поле для ввода');
    }

    let saveData = () => {
        alert(JSON.stringify(submitJson.data));
    }

    return (
        <Fragment>
            <div className="form">
                <form>
                    <div className="base-input">
                        <label>
                            <div className='label'>GitHub repository<i>*</i></div>
                            <div className="form-input">
                                <input className="ci-input"
                                       type='text'
                                       name='repository'
                                       value={repository}
                                       onBlur={e => blurHandler(e)}
                                       onChange={e => repositoryHandler(e)}
                                       placeholder="user-name/repo-name"
                                />
                                {repository !== '' &&
                                <i className="icon-clear"
                                   onClick={() => clearInput(setRepository, setRepositoryDirty, setRepositoryError)}/>
                                }
                                {(repositoryDirty && repositoryError) &&
                                <div className="error-message" style={{color: 'red'}}>{repositoryError}</div>}
                            </div>
                        </label>
                    </div>
                    <div className="base-input">
                        <label>
                            <div className='label'>Build command<i>*</i></div>
                            <div className="form-input">
                                <input className="ci-input"
                                       type='text'
                                       name='command'
                                       value={command}
                                       onBlur={e => blurHandler(e)}
                                       onChange={e => commandHandler(e)}
                                       placeholder="build command"
                                />
                                {command !== '' &&
                                <i className="icon-clear"
                                   onClick={() => clearInput(setCommand, setCommandDirty, setCommandError)}/>
                                }
                                {(commandDirty && commandError) &&
                                <div className="error-message" style={{color: 'red'}}>{commandError}</div>}
                            </div>
                        </label>
                    </div>
                    <div className="base-input">
                        <label>
                            <div className='label'>Main branch</div>
                            <div className="form-input">
                                <input className="ci-input"
                                       type='text'
                                       name='branch'
                                       value={branch}
                                       onChange={e => branchHandler(e)}
                                       placeholder="user-name/repo-name"
                                />
                                {branch !== '' &&
                                <i className="icon-clear" onClick={() => setBranch('')}/>
                                }
                            </div>
                        </label>
                    </div>
                    <div className="small-input">
                        <label>Synchronize every</label>
                        <input className="ci-input"
                               type='number'
                               name='period'
                               value={period}
                               onChange={e => periodHandler(e)}
                               placeholder="0"
                        />
                        <span>minutes</span>
                    </div>
                    <div className="form__btns">
                        <button className="ci-btn ci-btn__big ci-btn__yellow"
                                onClick={saveData}
                                disabled={!formValid}>
                            <span>Save</span>
                        </button>
                        <Link to="/" className="ci-btn ci-btn__big">
                            <span>Cancel</span>
                        </Link>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}