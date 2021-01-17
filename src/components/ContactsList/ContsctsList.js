import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
import Button from '../Button/Button';

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id} className={s.item}>
              <p>
                {name}: {number}
              </p>
              <Button text={'Delete'} listener={() => onDeleteContact(id)} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};
