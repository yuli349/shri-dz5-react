import React, {Fragment, useState} from 'react';
import {BuildItem} from '../../components/BuildItem/BuildItem';
import {Header} from '../../components/Header/Header';
import list from '../../assets/data/list.json';
import { Link } from 'react-router-dom';
import getPermission from '../../helpers/permission';

import './BuildsList.scss';
import {Modal} from "../../components/Modal/Modal";

export const BuildsList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [commit, setCommit] = useState('');

    const commitHandler = (e) => {
        setCommit(e.target.value)
    }

    function closeModal() {
        setIsModalOpen(false);
        setCommit('');
    }

    function getChunks() {
        return getPermission() === 'mobile' ? 5 : 9;
    }

    function onSubmit(values) {
        alert('Commit hash: ' + values);
        closeModal();
    }

    return (
        <Fragment>
            <Header title="yuli349/my-awesome-repo">
                <button className="ci-btn ci-btn__small header__btn-build"
                        onClick={() => setIsModalOpen(true)}>
                    <i className="icon"/> <span>Run build</span>
                </button>

                <Link className="ci-btn ci-btn__small header__btn-settings" to="/settings"><i
                    className="icon"/></Link>
            </Header>
            <div className="list">
                <div className="list__builds">
                    {list.data.map((build) => (
                        <Link className="build" key={build.buildNumber} to={`/build/${build.buildNumber}`}>
                            <BuildItem
                                build={build}
                            />
                        </Link>
                    ))}
                    {list.data.length > getChunks() && (
                    <button className="ci-btn ci-btn__small list__btn">
                        <span>Show more</span>
                    </button>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <Modal>
                    <div className="modal__title">New build</div>
                    <div className="modal__form">
                        <form>
                            <div className="base-input">
                                <label>
                                    <div className='label'>the commit hash which you want to build.</div>
                                    <div className="form-input">
                                        <input className="ci-input"
                                               type='text'
                                               name='commit'
                                               value={commit}
                                               onChange={e => commitHandler(e)}
                                               placeholder='Commit hash'
                                        />
                                        {commit !== '' &&
                                        <i className="icon-clear" onClick={() => setCommit('')}/>
                                        }
                                    </div>
                                </label>
                            </div>
                            <div className="form__btns">
                                <button disabled={commit === ''}
                                        onClick={() => onSubmit(commit)}
                                        className="ci-btn ci-btn__big ci-btn__yellow">
                                    <span>Run build</span>
                                </button>
                                <button className="ci-btn ci-btn__big" onClick={() => closeModal()}>
                                    <span>Cancel</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </Fragment>
    )
}