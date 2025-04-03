'use client';

import '@/styles/ContactStyles.css';

import Icon from '@mdi/react';
import { mdiPhone, mdiEmail, mdiGithub, mdiChat } from '@mdi/js';

export default function Contact() {
    return (
        <div className="contact-box">
            <div className="title">
                <b>Feel free to contact me!</b>
            </div>
            <div className="content">
                <div className="part">
                    <div className="icon-header">
                        <Icon path={mdiPhone} className="icon" />
                    </div>
                    <div className="title">Phone</div>
                    <div className="info">+36 31 781 3696</div>
                </div>
                <div className="part">
                    <div className="icon-header">
                        <Icon path={mdiEmail} className="icon" />
                    </div>
                    <div className="title">Email</div>
                    <div className="info">janipatrik138@gmail.com</div>
                </div>
                <div className="part">
                    <div className="icon-header">
                        <Icon path={mdiChat} className="icon" />
                    </div>
                    <div className="title">Discord</div>
                    <div className="info">validss</div>
                </div>
                <div className="part">
                    <div className="icon-header">
                        <Icon path={mdiGithub} className="icon" />
                    </div>
                    <div className="title">Github</div>
                    <div className="info">
                        <a href="https://github.com/Valid-Hub/">Valid-Hub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
