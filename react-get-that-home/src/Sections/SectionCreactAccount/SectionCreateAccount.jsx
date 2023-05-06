import Button from '../../components/Button/Button';
import { CreateSection } from './SectionCreateAccount-UI';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const SectionCreateAccount = () => {
  const { user } = useUser();
  return (
    <CreateSection>
      <div className='field-create'>
        <p>Getting someone to rent your apartment has never been this easy</p>
        {!user ? (
          <>
            <Link to={'/join'}>
              <Button type={'primary'}>Create an Account now</Button>
            </Link>
          </>
        ) : null}
      </div>
    </CreateSection>
  );
};

export default SectionCreateAccount;
