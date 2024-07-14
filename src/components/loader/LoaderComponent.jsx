import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

export const LoaderComponent = () => (
    <div className='container h-100' style={styles.container}>
            <ClimbingBoxLoader />
    </div>
)

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}