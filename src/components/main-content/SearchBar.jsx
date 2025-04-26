import SearchIconSvg from '../icons/SearchIconSvg';
import Button from '../ui/Button';

export function SearchBar() {
    return (
        <div className="search-wrapper">
            <div className="search-bar">
                <input type="text" placeholder="Job Title, Company, or Keywords" className="search-input" />
                <div className="search-divider"></div>
                <select className="search-select">
                    <option>Select Location</option>
                </select>
                <div className="search-divider"></div>
                <select className="search-select">
                    <option>Job Type</option>
                </select>

                <Button className="search-button">
                    <SearchIconSvg color='#ffffff ' />
                    Search
                </Button>
            </div>

            <div className="similar-tags">
                <span>Similar:</span>
                <Button variant="outline">Frontend</Button>
                <Button variant="outline">Backend</Button>
                <Button variant="outline">Graphic Designer</Button>
            </div>
        </div>
    );
}