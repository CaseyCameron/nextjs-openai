import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../../components/AppLayout';

export default function NewPost(props) {
  const handleClick = async () => {
    const res = await fetch(`/api/generatePost`, {
      method: 'POST',
    }).then(res => res.json());
    console.log(res);
  };

  return (
    <div>
      <h1>New Post Page</h1>
      <button className="btn" onClick={handleClick}>
        Generate
      </button>
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
