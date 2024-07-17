// Import the ClimbingBoxLoader component from react-spinners
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

// Define the LoaderComponent functional component
export const LoaderComponent = () => (
    <div className='container h-100' style={styles.container}>
        {/* Render the ClimbingBoxLoader component */}
        <ClimbingBoxLoader />
    </div>
);

// Inline styles for the container div
const styles = {
    container: {
        display: 'flex', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Align items in the center
    }
};
