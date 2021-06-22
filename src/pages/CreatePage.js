import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const { request } = useHttp()
    const [link, setLink] = useState('')
    
    const changeHandler = e => setLink(e.target.value)

    const pressHandler = async e => {
        if (e.key === 'Enter') {
            try {
                const data = await request('/api/links/generate', 'POST', { from: link }, {Authorization: `Bearer ${auth.token}`})
                console.log(data);
                history.push(`/detail/${data.link._id}`)
            } catch (e) {}
        }
    }

    return (
        <div>
            <div>
                <input
                    id="link"
                    placeholder="Paste your link"
                    type="text"
                    value={link}
                    onChange={changeHandler}
                    onKeyPress={pressHandler}
                />
                <label htmlFor="link">Link</label>
            </div>
        </div>
    )
}