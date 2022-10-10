import {getUser} from '../../utilities/users-service';

function HomePage({ user }) {
    return(
        <>
            <h1>{user}'s todos</h1>
        </>
    )
}

export default HomePage;