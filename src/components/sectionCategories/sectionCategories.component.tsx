import React from "react";
import {TitleComponent} from "../elements/title/title.component";

/**
 * Компонент для вывода текста кнопок
 *
 * @param sectionName
 * @param categories
 * @constructor
 */
const SectionCategoriesComponent = ({sectionName, categories}: any) => {
    return (
        <div className = "sections-categories-block">
            <TitleComponent text = {sectionName} />

            <div className = "sections-categories-list">

            </div>
        </div>
    );
}