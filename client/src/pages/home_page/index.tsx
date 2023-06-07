import { FormEvent, useState } from 'react';
import { formatAddressInput } from '../../utils';
import { API } from '../../utils/api';

export const HomePage = () => {
    const [ address, setAddress ] = useState<string>('');

    const handleAddressSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await API.getRepData(formatAddressInput(address));

        if (!response.data.status) {
            console.log(response.data)
        }
    }

    return (
        <main id={'landing-page'}>
            <form onSubmit={handleAddressSearch}>
                <label htmlFor={'address'}>
                    <input
                        id={'address'}
                        name={'address'}
                        value={address}
                        placeholder={'Enter your address to start'}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <button type={'submit'}>Submit</button>
            </form>
        </main>
    )
}