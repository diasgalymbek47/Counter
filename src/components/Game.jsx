import React, { useState } from "react";
import "./game.css";

function Game() {
    const [start, setStart] = useState(0);
    const [count, setCount] = useState(start);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);
    const [step, setStep] = useState(1);

    let _min = 0;
    let _max = 10;
    let _start = 0;
    let _step = 1;

    const set_Min = (target) => {
        _min = target;
    };

    const set_Max = (target) => {
        _max = target;
    };

    const set_Start = (target) => {
        _start = target;
    };

    const set_Step = (target) => {
        _step = target;
    };

    function saveValues() {
        setCount(_start);
        setMin(_min);
        setMax(_max);
        setStart(_start);
        setStep(_step);

        resetInputs();
    }

    function resetInputs() {
        const inputs = {
            min: document.querySelector(".min"),
            max: document.querySelector(".max"),
            start: document.querySelector(".start"),
            step: document.querySelector(".step"),
        };

        for (const key in inputs) {
            inputs[key].value = "";
        }
    }

    function fullReset() {
        resetInputs();

        setCount(0);
        setMin(0);
        setMax(10);
        setStart(0);
        setStep(1);
    }

    function validation(input, target, condition, callback, defaulValue) {
        if (target) {
            if (!condition) {
                input.value = defaulValue;
                callback(defaulValue);
            } else {
                callback(target);
            }
        }
    }

    return (
        <div className="clicker">
            <h1 className="title">Counter</h1>
            <div className="settings">
                <p className="settings-field">
                    <label>Мин: {min}</label>
                    <input
                        className="min"
                        type="number"
                        placeholder="мин"
                        onChange={(e) => {
                            const input = e.target;
                            const target = parseInt(e.target.value);
                            const condition = target <= max && target >= min;

                            validation(input, target, condition, set_Min, min);
                        }}
                    />
                </p>
                <p className="settings-field">
                    <label>Мах: {max}</label>
                    <input
                        className="max"
                        type="number"
                        placeholder="макс"
                        onChange={(e) => {
                            const input = e.target;
                            const target = parseInt(e.target.value);
                            const condition = target <= max && target >= min;

                            validation(input, target, condition, set_Max, min);
                        }}
                    />
                </p>
                <p className="settings-field">
                    <label>Начало: {start}</label>
                    <input
                        className="start"
                        type="number"
                        placeholder="С какого начать?"
                        onChange={(e) => {
                            const input = e.target;
                            const target = parseInt(e.target.value);
                            const condition = target <= max && target >= min;

                            validation(input, target, condition, set_Start, min);
                        }}
                    />
                </p>
                <p className="settings-field">
                    <label>Шаг: {step}</label>
                    <input
                        className="step"
                        type="number"
                        placeholder="Шаг"
                        onChange={(e) => {
                            const input = e.target;
                            const target = parseInt(e.target.value);
                            const condition = target <= max && target >= 1;

                            validation(input, target, condition, set_Step, 1);
                        }}
                    />
                </p>
                <button className="btn" onClick={() => saveValues()}>
                    Сохранить
                </button>
            </div>
            <div className="info">
                <button
                    className="btn"
                    onClick={() => {
                        if (count - step > min) {
                            setCount(count - step);
                        } else {
                            setCount(min);
                        }
                    }}
                >
                    -
                </button>
                <span className="count">{count}</span>
                <button
                    className="btn"
                    onClick={() => {
                        if (count + step < max) {
                            setCount(count + step);
                        } else {
                            setCount(max);
                        }
                    }}
                >
                    +
                </button>
                <button className="btn" onClick={() => fullReset()}>
                    Сбросить
                </button>
            </div>
        </div>
    );
}

export default Game;
