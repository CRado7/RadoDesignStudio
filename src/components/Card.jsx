import '../styles/Card.css'
import BlobGradient from '../components/BlobGradient';

export default function Card(children) {
    return (
        <div className="package-card">
                <BlobGradient />
                {children.children}
        </div>
    );
}