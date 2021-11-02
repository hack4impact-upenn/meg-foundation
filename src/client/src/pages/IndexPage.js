import { useQuery } from 'react-query';
import api from '../api';
import Card from '../components/Card.tsx';

function IndexPage() {
  // Example API request with caching, fetch list of users.
  // See https://react-query.tanstack.com/ for documentation on react-query.
  const { isLoading, error, data } = useQuery('users', () =>
    api.get('/api/users').then((res) => {
      console.log(res);
      return res.data;
    })
  );

  return (
    <div className="container center">
      <header className="hero">
        <div className="hero-body">
          <h1 className="title">Welcome to Meg Foundation!</h1>
        </div>
      </header>
      <div>
        <Card
          title="Title"
          description="Baby back, ayy
Couple racks, ayy
Couple Grammys on him
Couple plaques, ayy
That's a fact, ayy
Throw it back, ayy
Throw it back, ayy
And this one is for the champions
I ain't lost since I began, yeah
Funny how you said it was the end, yeah
Then I went did it again, yeah
I told you long ago, on the road
I got what they waitin' for
I don't run from nothin', dog
Get your soldiers, tell 'em I ain't layin' low
You was never really rootin' for me anyway
When I'm back up at the top I wanna hear you say
He don't run from nothin', dog
Get your soldiers, tell em that the break is over"
        />
      </div>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        <p style={{ color: 'red' }}>An error occurred! {error}</p>
      ) : (
        <div className="is-flex is-flex-wrap-wrap">
          {data.result.map((user) => (
            <article key={user.id} className="box m-2">
              <p className="has-text-weight-bold">
                {user.firstName} {user.lastName}
              </p>
              <p>{user.email}</p>
            </article>
          ))}
        </div>
      )}
      <footer className="section">
        To be filled in with the actual app, soon! :)
      </footer>
    </div>
  );
}

export default IndexPage;
