import './styles.css'

export const TextInput = ({searchValue, handleChange}) => (
    <input
          placeholder='Type your search'
          className='text-input'
          value={searchValue}
          type='search'
          onChange={handleChange}
        />
)