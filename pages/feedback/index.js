import { useState, Fragment } from 'react';
import { buildFeedbackPath, extractFeedback } from '../../helpers/feedback';

export default function FeedbackPage({ feedbackItems }) {
  const [loadedFeedback, setLoadedFeedback] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then(response => response.json())
      .then(data => setLoadedFeedback(data.feedback));
  }

  return (
    <Fragment>
      {loadedFeedback && <p>{loadedFeedback.email}</p>}
      <ul>
        {feedbackItems.map(item => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>{' '}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: { feedbackItems: data },
  };
}
