
import React, { useState } from "react";
import './style.css';

const Conditions = () => {

    const copyData = [
        { id: "1", name: "Changes", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor purus, dictum at vulputate at, varius ac elit. Maecenas lobortis ornare dictum. Fusce eu convallis lorem. Aliquam urna turpis, porttitor id lectus nec, volutpat vulputate mauris. Sed volutpat sed massa nec iaculis. Curabitur congue ante magna, vel venenatis enim semper sit amet. Proin eget nisl enim. Aliquam efficitur tellus a diam ullamcorper placerat. Sed eget fermentum lorem. Morbi eget ante laoreet, sollicitudin nunc vel, iaculis velit. Sed ac molestie ipsum. Pellentesque bibendum imperdiet tellus vitae porta. Suspendisse placerat iaculis mi, sit amet tincidunt ex pulvinar vitae. Fusce quis est neque. Duis sagittis rhoncus tempus. Etiam sit amet egestas ante. Morbi eu ornare libero, ut elementum ex. Proin fermentum nisi vehicula nibh interdum tempor. Praesent quam justo, posuere vitae magna in, malesuada fringilla neque. Nulla ultricies libero viverra est congue, ut hendrerit nibh convallis. Mauris sed nulla in leo pellentesque rutrum vel id libero. Nullam aliquam vitae ipsum at gravida. Vestibulum luctus aliquet lorem tincidunt facilisis. Nam et odio felis. Vivamus a commodo dui, nec vestibulum est. Nunc lectus augue, sollicitudin ut justo sed, fermentum feugiat nisi. Pellentesque tortor leo, placerat molestie bibendum ut, suscipit et lacus. Morbi sit amet luctus odio, quis feugiat eros. Nullam elementum, metus quis vestibulum posuere, nulla diam laoreet nisl, in tempus turpis magna a mauris. Sed eu nunc cursus, viverra quam eget, rhoncus leo. Etiam eu nulla lorem. In varius ex hendrerit nisi luctus finibus. Praesent imperdiet convallis finibus. Aliquam erat volutpat." },
        { id: "2", name: "Information Submitted Through the Site", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor purus, dictum at vulputate at, varius ac elit. Maecenas lobortis ornare dictum. Fusce eu convallis lorem. Aliquam urna turpis, porttitor id lectus nec, volutpat vulputate mauris. Sed volutpat sed massa nec iaculis. Curabitur congue ante magna, vel venenatis enim semper sit amet. Proin eget nisl enim. Aliquam efficitur tellus a diam ullamcorper placerat. Sed eget fermentum lorem. Morbi eget ante laoreet, sollicitudin nunc vel, iaculis velit. Sed ac molestie ipsum. Pellentesque bibendum imperdiet tellus vitae porta. Suspendisse placerat iaculis mi, sit amet tincidunt ex pulvinar vitae. Fusce quis est neque. Duis sagittis rhoncus tempus." },
        { id: "3", name: "Jurisdictional Issues", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor purus, dictum at vulputate at, varius ac elit. Maecenas lobortis ornare dictum. Fusce eu convallis lorem. Aliquam urna turpis, porttitor id lectus nec, volutpat vulputate mauris. Sed volutpat sed massa nec iaculis. Curabitur congue ante magna, vel venenatis enim semper sit amet. Proin eget nisl enim. Aliquam efficitur tellus a diam ullamcorper placerat. Sed eget fermentum lorem. Morbi eget ante laoreet, sollicitudin nunc vel, iaculis velit. Sed ac molestie ipsum. Pellentesque bibendum imperdiet tellus vitae porta. Suspendisse placerat iaculis mi, sit amet tincidunt ex pulvinar vitae. Fusce quis est neque. Duis sagittis rhoncus tempus. Etiam sit amet egestas ante. Morbi eu ornare libero, ut elementum ex. Proin fermentum nisi vehicula nibh interdum tempor. Praesent quam justo, posuere vitae magna in, malesuada fringilla neque. Nulla ultricies libero viverra est congue, ut hendrerit nibh convallis. Mauris sed nulla in leo pellentesque rutrum vel id libero. Nullam aliquam vitae ipsum at gravida. Vestibulum luctus aliquet lorem tincidunt facilisis. Nam et odio felis. Vivamus a commodo dui, nec vestibulum est. Nunc lectus augue, sollicitudin ut justo sed, fermentum feugiat nisi. Pellentesque tortor leo, placerat molestie bibendum ut, suscipit et lacus. Morbi sit amet luctus odio, quis feugiat eros. Nullam elementum, metus quis vestibulum posuere, nulla diam laoreet nisl, in tempus turpis magna a mauris. Sed eu nunc cursus, viverra quam eget, rhoncus leo. Etiam eu nulla lorem. In varius ex hendrerit nisi luctus finibus. Praesent imperdiet convallis finibus. Aliquam erat volutpat." },
        { id: "4", name: "Rules of Conduct", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor purus, dictum at vulputate at, varius ac elit. Maecenas lobortis ornare dictum. Fusce eu convallis lorem. Aliquam urna turpis, porttitor id lectus nec, volutpat vulputate mauris. Sed volutpat sed massa nec iaculis. Curabitur congue ante magna, vel venenatis enim semper sit amet. Proin eget nisl enim. Aliquam efficitur tellus a diam ullamcorper placerat. Sed eget fermentum lorem. Morbi eget ante laoreet, sollicitudin nunc vel, iaculis velit. Sed ac molestie ipsum. Pellentesque bibendum imperdiet tellus vitae porta. Suspendisse placerat iaculis mi, sit amet tincidunt ex pulvinar vitae. Fusce quis est neque. Duis sagittis rhoncus tempus." },
        { id: "5", name: "Embedding Games", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor purus, dictum at vulputate at, varius ac elit. Maecenas lobortis ornare dictum. Fusce eu convallis lorem. Aliquam urna turpis, porttitor id lectus nec, volutpat vulputate mauris. Sed volutpat sed massa nec iaculis. Curabitur congue ante magna, vel venenatis enim semper sit amet. Proin eget nisl enim. Aliquam efficitur tellus a diam ullamcorper placerat. Sed eget fermentum lorem. Morbi eget ante laoreet, sollicitudin nunc vel, iaculis velit. Sed ac molestie ipsum. Pellentesque bibendum imperdiet tellus vitae porta. Suspendisse placerat iaculis mi, sit amet tincidunt ex pulvinar vitae. Fusce quis est neque. Duis sagittis rhoncus tempus." },
        { id: "6", name: "Products", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor purus, dictum at vulputate at, varius ac elit. Maecenas lobortis ornare dictum. Fusce eu convallis lorem. Aliquam urna turpis, porttitor id lectus nec, volutpat vulputate mauris. Sed volutpat sed massa nec iaculis. Curabitur congue ante magna, vel venenatis enim semper sit amet. Proin eget nisl enim. Aliquam efficitur tellus a diam ullamcorper placerat. Sed eget fermentum lorem. Morbi eget ante laoreet, sollicitudin nunc vel, iaculis velit. Sed ac molestie ipsum. Pellentesque bibendum imperdiet tellus vitae porta. Suspendisse placerat iaculis mi, sit amet tincidunt ex pulvinar vitae. Fusce quis est neque. Duis sagittis rhoncus tempus." },
        { id: "7", name: "Profiles and Forums.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor purus, dictum at vulputate at, varius ac elit. Maecenas lobortis ornare dictum. Fusce eu convallis lorem. Aliquam urna turpis, porttitor id lectus nec, volutpat vulputate mauris. Sed volutpat sed massa nec iaculis. Curabitur congue ante magna, vel venenatis enim semper sit amet. Proin eget nisl enim. Aliquam efficitur tellus a diam ullamcorper placerat. Sed eget fermentum lorem. Morbi eget ante laoreet, sollicitudin nunc vel, iaculis velit. Sed ac molestie ipsum. Pellentesque bibendum imperdiet tellus vitae porta. Suspendisse placerat iaculis mi, sit amet tincidunt ex pulvinar vitae. Fusce quis est neque. Duis sagittis rhoncus tempus." },
        { id: "8", name: "License", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor purus, dictum at vulputate at, varius ac elit. Maecenas lobortis ornare dictum. Fusce eu convallis lorem. Aliquam urna turpis, porttitor id lectus nec, volutpat vulputate mauris. Sed volutpat sed massa nec iaculis. Curabitur congue ante magna, vel venenatis enim semper sit amet. Proin eget nisl enim. Aliquam efficitur tellus a diam ullamcorper placerat. Sed eget fermentum lorem. Morbi eget ante laoreet, sollicitudin nunc vel, iaculis velit. Sed ac molestie ipsum. Pellentesque bibendum imperdiet tellus vitae porta. Suspendisse placerat iaculis mi, sit amet tincidunt ex pulvinar vitae. Fusce quis est neque. Duis sagittis rhoncus tempus." },

    ]


    return (
        <>
            <div className="condition_text">
                <div className="container">
                    <div className="visit-text">
                        <h1>term & conditions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor
                            purus, dictum at vulputate at, varius ac elit. Maecenas lobortis ornare dictum. Fusce eu convallis lorem. Aliquam urna turpis, porttitor id lectus nec, volutpat vulputate mauris. Sed volutpat sed massa nec iaculis. Curabitur congue ante magna, vel venenatis enim semper sit amet</p>
                    </div>
                    <div className="changes_wrapper">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="Change_white_box">
                                    <ul>
                                      <li><a href="#content_1" className="active">Changes</a> </li>
                                      <li><a href="#content_2" >Information Submitted..</a> </li>
                                      <li><a href="#content_3">Jurisdictional Issues</a> </li>
                                      <li><a href="#content_4">Rules of Conduct</a> </li>
                                      <li><a href="#content_5">Embedding Games</a> </li>
                                      <li><a href="#content_6">Products</a> </li>
                                      <li><a href="#content_7">Profiles and Forums.</a> </li>
                                      <li><a href="#content_8">License</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="condition_wrapp">
                                    <div className="change_dummy">
                                        <div className="change_dummy">
                                            {copyData.map((item) => (
                                                <div key={item.id} className="wrapp_content" id={`content_${item.id}`}>
                                                    <h4>{item.name}</h4>
                                                    <p>{item.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conditions;