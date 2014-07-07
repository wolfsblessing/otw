
greaterThan(QT_MAJOR_VERSION, 4):QT += widgets webkitwidgets

CONFIG(debug, debug|release) { 
        TARGET = otw.debug
	OBJECTS_DIR = tmp/debug
	RCC_DIR = tmp/debug/rcc
}

CONFIG(release, debug|release) { 
        TARGET = otw
	OBJECTS_DIR = tmp/release
	RCC_DIR = tmp/release/rcc
	QT -= testlib
}

DESTDIR = out
MOC_DIR = tmp/moc
UI_DIR = tmp/ui

CONFIG += console

# Add more folders to ship with the application, here
folder_01.source = html
folder_01.target = .
DEPLOYMENTFOLDERS = folder_01

# Define TOUCH_OPTIMIZED_NAVIGATION for touch optimization and flicking
#DEFINES += TOUCH_OPTIMIZED_NAVIGATION

# The .cpp file which was generated for your project. Feel free to hack it.
SOURCES += main.cpp

# Please do not modify the following two lines. Required for deployment.
include(html5applicationviewer/html5applicationviewer.pri)
qtcAddDeployment()

