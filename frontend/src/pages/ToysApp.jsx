import { Button } from "@material-ui/core";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToyList } from '../cmps/ToyList'
import { loadToys} from '../store/actions/toy.action.js'


class _ToysApp extends Component {

    componentDidMount() {
        this.props.loadToys()
    }

    render() {
        const { toys, user } = this.props
        if (!toys) return <div>Loading...</div>
        console.log(toys);
        return (
            <section className="toy-app">
                <h1>hellooooooooooooooooaa </h1>
                {user && user.isAdmin &&
                    <Button><Link to={`/add`}>Add toy</Link></Button>}
                <ToyList toys={toys} onRemove={this.onRemoveToy} setSelectedToy={this.setSelectedToy} />
            </section>
        )
    }
}


const mapActionToProps = {
    loadToys,
    
}

export const ToysApp = connect(mapStateToProps, mapActionToProps)(_ToysApp)