import './WordListPage.module.scss';
import Table from '../Table/Table';

export default function WordListPage() {
    return (
        <div className='main'>
            <h1 className='main__name'>word list</h1>
            <Table />
        </div>
    )
}