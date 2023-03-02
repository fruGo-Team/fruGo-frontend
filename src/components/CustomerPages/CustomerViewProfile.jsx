// UI Components for HomePage
import CustomerNavBar from "../NavBar/CustomerNavbar"
import CustomerWelcome from "./CustomerWelcome"

import Title from "../styled/Title"

export default function CustomerViewProfile() {
    return (
        <>
            <CustomerNavBar />
            <CustomerWelcome />
            <section>
                <div className="confirmation-details">
                    <div>
                        <Title>Email</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>Username</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>Password</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>Name</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>Description</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>City</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                </div>
            </section>
        </>
    )
}


