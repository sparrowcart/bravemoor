'use client'
import { useState } from 'react'
interface ActiveState {
    status: boolean
    key: number
}
export default function Accordion2() {
    const [isActive, setIsActive] = useState<ActiveState>({
        status: false,
        key: 1,
    })

    const handleClick = (key: number) => {
        if (isActive.key === key) {
            setIsActive({
                ...isActive,
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card active">
                    <div className="accordion-header" id="collapse-item-1" onClick={() => handleClick(1)}>
                        <button  className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" 
                        aria-expanded="true" aria-controls="collapse-1"><span className="accordion-number">01</span> What exactly does Brave Moor do?</button>
                    </div>
                    <div id="collapse-1" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text text-white">
                                 We help businesses grow online — by building high-performing websites and apps, and running powerful
                                 digital marketing campaigns. From branding to results, we’ve got you covered.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-2" onClick={() => handleClick(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2"><span className="accordion-number">02</span>Do you only offer digital marketing,
                         or do you build websites and apps too?</button>
                    </div>
                    <div id="collapse-2" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text text-white"> We do both. Our team designs and develops custom websites, web apps, and mobile apps — 
                                and then we market them with proven digital strategies to drive real results.

</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-3" onClick={() => handleClick(3)}>
                        <button  className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3"><span className="accordion-number">03</span>How is Brave Moor different from other agencies?
</button>
                    </div>
                    <div id="collapse-3" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text text-white"> We don’t just offer services — we partner with brands that want to win. Our work combines 
                                strong design, deep strategy, and a human-centered approach that makes people trust your brand.

</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-4" onClick={() => handleClick(4)}>
                        <button  className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4"><span className="accordion-number">04</span>Do you work with startups, small businesses, or only big companies?
</button>
                    </div>
                    <div id="collapse-4" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text text-white"> We work with all — from startups to established brands. If you’re serious about growing your 
                                business and building something meaningful, we’re ready to help.

</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-5" onClick={() => handleClick(5)}>
                        <button  className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5"><span className="accordion-number">05</span>What’s the first step if I want to work with you?
</button>
                    </div>
                    <div id="collapse-5" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text text-white"> Start with a free discovery call. We’ll learn about your goals, audit your current online presence, 
                                and show you how we can help. No pressure, just real value.

</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
