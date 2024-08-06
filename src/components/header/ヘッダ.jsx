import './ヘッダです.css'
import PopoverText from '../../components/popoverText/popoverText'
import { redirectTo , replacePath} from '../../helpers/redirectPage'
// ヘッダぼんかつ = 'headerDif'; 

/**Header */
const ヘッダ = () => {

    return (
        <div className="ヘッダぼんかつ">
            <br />
            <img className='mountFuji' src="/imgs/mountFuji.png" />
            <div className={'Itensヘッダ'}>
                <br />
                <PopoverText 
                    text={'いえ'}
                    popoverContent={'Home'}
                    position={'S'}
                    acton={() => {}}
                />
                <PopoverText 
                    text={'リスト'}
                    popoverContent={'List'}
                    position={'S'}
                    acton={() => replacePath('list')}    
                />
                <PopoverText 
                    text={'おんがく'}
                    popoverContent={'Music'}
                    position={'S'}
                    acton={() => replacePath('musics')}
                />
            </div>
        </div>
    )
}

export default ヘッダ;